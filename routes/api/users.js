const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys_dev');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');



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
        errors = "This user does not exist";
        return res.status(400).json(errors);
      }
  
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          const payload = { id: user.id, handle: user.handle };
  
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

  router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err =>
            res.status(404).json({ nouserfound: 'No user found with that ID' })
        );
});


module.exports = router;