const express = require("express");
const methodOverride = require("method-override")
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');


router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
  .then(user => res.json(user)
  .catch(err => res.status(404)
  .json({ updateError: 'Could not update' })))


})

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
                  const payload = { id: user.id, username: user.username };
                  jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                    res.json({
                    success: true,
                    token: "Bearer " + token,
                    followed_users: user.followed_users,
                    following_users: user.following_users,
                    followed_posting: user.followed_posting
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
        const payload = { id: user.id, username: user.username };
        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token,
            followed_users: user.followed_users,
            following_users: user.following_users,
            followed_posting: user.followed_posting
          });
        });
      } else {
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});


router.get('/follows', (req, res) => {
  const userIdArray = req.body.followedUsersArray.split(",");
  User.find({_id: {$in : userIdArray}})
  .then(folUser => res.json(folUser))
  .catch(errors => res.json(errors))
});

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