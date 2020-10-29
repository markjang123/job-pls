const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const keys = require('../../config/keys');


const Posting = require('../../models/Posting');
const validatePostingInput = require('../../validation/postings');



router.get('/user/:user_id', (req, res) => {
    Posting.find({user: req.params.user_id})
        .then(postings => res.json(postings))
        .catch(err =>
            res.status(404).json({ nopostingsfound: 'No postings found from that user' }
        )
    );
});

router.post('/git_search',
    (req, res) => {

        const { keywords, location, company } = req.body
        const url = "https://jobs.github.com/positions.json?";
        let keywordURL = `description=`;
        let companyURL = ''
        let locationURL = `&location=`;
        keywords.split(" ").forEach(word => {
            keywordURL = keywordURL + `${word}+`
        });
        keywordURL = keywordURL.slice(0, keywordURL.length-1);

        company.split(" ").forEach(word => {
            companyURL = companyURL + `${word}+`
        });
        companyURL = companyURL.slice(0, companyURL.length-1);

        location.split(" ").forEach(word => {
            locationURL = locationURL + `${word}+`
        });
        locationURL = locationURL.slice(0, locationURL.length-1);

        githubRequest = new XMLHttpRequest();
        githubRequest.open("GET", url + keywordURL + locationURL, true);
        // githubRequest.setRequestHeader('Content-type', 'application/json');
        
        githubRequest.onreadystatechange = () => {
            if(githubRequest.readyState == 4 && githubRequest.status == 200) {
                return res.json(JSON.parse(githubRequest.responseText));
            }
        }

        githubRequest.send(JSON.stringify(githubRequest))
        // .then(response => res.json(response))
        // .catch(error => res.json(error))
    }

)

router.post('/search',
    (req, res) => {
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
    }
);

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

router.get('/:id', (req, res) => {
    Posting.findById(req.params.id)
        .then(posting => res.json(posting))
        .catch(err =>
            res.status(404).json({ nopostingfound: 'No posting found with that ID' })
        );
});

router.get('/', (req, res) => {
    Posting.find()
        .sort({ date: -1 })
        .then(postings => res.json(postings))
        .catch(err => res.status(404).json({ nopostingsfound: 'No postings found' }));
});
  module.exports = router;
