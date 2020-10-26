const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Posting = require('../../models/Posting');
const validatePostingInput = require('../../validation/postings');

router.get('/', (req, res) => {
    Posting.find()
        .sort({ date: -1 })
        .then(postings => res.json(postings))
        .catch(err => res.status(404).json({ nopostingsfound: 'No postings found' }));
});

router.get('/user/:user_id', (req, res) => {
    Posting.find({user: req.params.user_id})
        .then(postings => res.json(postings))
        .catch(err =>
            res.status(404).json({ nopostingsfound: 'No postings found from that user' }
        )
    );
});

router.get('/:id', (req, res) => {
    Posting.findById(req.params.id)
        .then(posting => res.json(posting))
        .catch(err =>
            res.status(404).json({ nopostingfound: 'No posting found with that ID' })
        );
});


router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validatePostingInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newPosting = new Posting({
        user: req.body.user.id,
        posting_url: req.body.posting_url,
        status: 'none',
        company: req.body.company,
        salary: req.body.salary,
        description: req.body.description,
        public: true
      });
  
      newPosting.save().then(posting => res.json(posting));
    }
  );

  module.exports = router;