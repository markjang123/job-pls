const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const keys = require('../../config/keys');


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
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validatePostingInput(req.body);
  
      // if (!isValid) {
      //   return res.status(400).json(errors);
      // }
  
      const newPosting = new Posting({
        job_title: req.body.job_title,
        user: req.body.user.id,
        posting_url: req.body.posting_url,
        status: 'none',
        company: req.body.company,
        salary: req.body.salary,
        description: req.body.description,
        public: true
      });
  
      newPosting.save().then(posting => res.json(posting)).catch(errors => res.json(errors));
    }
  );

  router.post('/search',
    (req, res) => {
        // console.log(req.body)
        // // const { keywords, location, radius, body, salary, page } = req.body.joobleRequest
        // const joobleRequest = ({
        //     keywords: req.body.keywords,
        //     location: req.body.location,
        //     radius: req.body.radius,
        //     salary: req.body.salary,
        //     page: req.body.page
        // })
        // joobleResponse = new XMLHttpRequest();
        // joobleResponse.open("POST", `https://jooble.org/api/${keys.joobleAPI}`, true);
        // joobleResponse.setRequestHeader('Content-Type', 'application/json');
        // joobleResponse.send(JSON.stringify(joobleRequest))
        // .then(response => res.json(response))
        // .catch(error => res.json(error))

        const joobleRequest = ({
            keywords: req.body.keywords,
            location: req.body.location,
            radius: req.body.radius,
            salary: req.body.salary,
            page: req.body.page
        })
        const url = "https://jooble.org/api/";
        const key = keys.joobleAPI;

        joobleResponse = new XMLHttpRequest();
        joobleResponse.open("POST", url + key, true);
        joobleResponse.setRequestHeader('Content-type', 'application/json');
        
        joobleResponse.onreadystatechange = () => {
            if(joobleResponse.readyState == 4 && joobleResponse.status == 200) {
                return res.json(JSON.parse(joobleResponse.responseText));
            }
        }

        joobleResponse.send(JSON.stringify(joobleRequest))
        // .then(response => res.json(response))
        // .catch(error => res.json(error))
    }
  )

  module.exports = router;
