const express = require("express");
const methodOverride = require("method-override")
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');


// router.put("/:id", (req, res) => {
//   User.findByIdAndUpdate(req.params.id, req.body)
//   .then(user => res.json(user))
//   .catch(err => res.status(404)
//   .json({ updateError: 'Could not update' })))

// })

router.put("/:id", (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(user => {
            const payload = { 
                _id: user._id, 
                username: user.username ,
                followed_users: user.followed_users,
                following_users: user.following_users,
                followed_posting: user.followed_posting
            };
            
            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                    success: true,
                    token: "Bearer " + token
                })
            })
        }).catch(err => res.status(404).json({ updateError: 'Could not update' }))
    }
);

router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    User.findOne({ username: req.body.username }).then(user => {
        if (user) {
          errors = "User already exists";
          return res.status(400).json(errors);
        } else {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
                .save()
                .then(user => {
                    const payload = { 
                        _id: user._id, 
                        username: user.username ,
                        followed_users: user.followed_users,
                        following_users: user.following_users,
                        followed_posting: user.followed_posting
                    };
                    // console.log(payload);
                    jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                    res.json({
                    success: true,
                    token: "Bearer " + token
                    });
                });
                })
                .catch(err => console.log(err));
            });
        });
        }
    });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email }).then(user => {
    if (!user) {
      const errors = "This user does not exist";
      return res.status(400).json(errors);
    }
  

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { 
            _id: user._id, 
            username: user.username,
            followed_users: user.followed_users,
            following_users: user.following_users,
            followed_posting: user.followed_posting        
        };
        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});

// router.patch(`/:id`, (req, res) => {
    
//     const newPosting = new Posting({
//         posting_id: req.body.posting_id,
//         posting_url: req.body.posting_url,
//         job_title: req.body.job_title,
//         status: req.body.status,
//         company: req.body.company,
//         salary: req.body.salary,
//         description: req.body.description,
//         location: req.body.location,
//         snippet: req.body.snippet,
//         source: req.body.source,
//         type: req.body.type,
//         link: req.body.link,
//         created_at: req.body.created_at,
//         public:  true,
//     });
//     newPosting.save().then(posting => {
//         User.findById(req.params.id)
//         .then(user => {
//             console.log(user);
//             // let newUserFollows = {
//                 // followed_posting: 
//             user.followed_posting.push(posting);                    
//             // }
//             user.save({new: true}).then((newUser) => {
//                 res.json(newUser);
//             }).catch(errors => res.json(errors));
//         }).catch(errors => res.json(errors));
//     }).catch(errors => res.json(errors));
// });

router.put(`/:id/posting`, (req, res) => {
    const newPosting = new Posting(req.body);
    console.log(newPosting);
    newPosting.save().then(posting => {
        User.findById(req.params.id)
        .then(user => {
            user.followed_posting.push(posting._id);
            user.save({new: true}).then((newUser) => {
                console.log('/api/users/:id/posting', user)
                const payload = { 
                    _id: newUser._id, 
                    username: newUser.username ,
                    followed_users: newUser.followed_users,
                    following_users: newUser.following_users,
                    followed_posting: newUser.followed_posting
                };
                res.json(payload);
            }).catch(errors => {
                console.log('error1')
                res.json(errors)});
        }).catch(errors => {
            console.log('error2')
            res.json(errors)});
    }).catch(errors => {
        console.log('error3')
        res.json(errors)});
});



router.get('/follows', (req, res) => {
  const userIdArray = req.body.followedUsersArray.split(",");
  User.find({_id: {$in : userIdArray}})
  .then(folUser => res.json(folUser))
  .catch(errors => res.json(errors))
});

// router.get('/userpostings/:id', (req, res) => {
//     User.findById(req.params.id)
//         .then(user => {
//             Posting.find({posting_id: req.body.posting_id})
//                 .then(postings => {
//                     postings.forEach( posting => {
//                         if(user.followed_posting.includes(posting._id.toString())){
//                             return res.json(posting);
//                         }
//                         return res.json(false);
//                     })
//                 })
//         })
// })

router.get('/', (req, res) => {
User.find()
    .then(users => res.json(users))
    .catch(err => res.status(404));
})

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
  .then(user => res.json(user))
  .catch(err => res.status(404)
  .json({ nouserfound: 'No user found with that ID' }));
}); 


router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(404).json({ nousersfound: 'No users found' }));
});





module.exports = router;