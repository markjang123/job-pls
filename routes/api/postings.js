const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const keys = require('../../config/keys');


const Posting = require('../../models/Posting');
const User = require('../../models/User');

const validatePostingInput = require('../../validation/postings');

router.get('/user/:user_id', (req, res) => {
    User.findById(req.params.user_id)
    .then(user => {
        Posting.find({_id: {$in : user.followed_posting}})
            .then(postings => {
                res.json(postings)})
            .catch(err =>
                res.status(404).json({ nopostingsfound: 'No postings found from that user' }
            )
        );

    }).catch( errors => {
        res.json(errors);
    })
});

// router.post('/usa_search',
//     (req, res) => {

//         const { keywords, location, radius, salary } = req.body
//         let url = "https://data.usajobs.gov/api/search?";
//         if(keywords){
//             let keyword = 'Keyword=';
//             let keywordArr = keywords.split(" ");
//             keywordArr.forEach(word => {
//                 keyword = keyword + `${word}%20`
//             });
//             keyword = keyword.slice(0,keyword.length-3) + '&';
//             url = url + keyword;
//         };
//         if(location){
//             let locationName = 'LocationName=';
//             let locationNameArr = location.split(" ");
//             let radiusString = `Radius=${radius}&`;
//             locationNameArr.forEach(word => {
//                 locationName = locationName + `${word}%20`;
//             });
//             locationName = locationName.slice(0,locationName.length-3) + '&';
//             url = url + locationName + radiusString;           
//         };
//         if(salary){
//             let RemunerationMinimumAmount = `RemunerationMinimumAmount=${salary}&`;
//             url = url + RemunerationMinimumAmount;
//         };

//         let resultsFromPage = 'ResultsPerPage=50&';
//         let fields = 'Fields=full';

//         url = url + resultsFromPage + fields;
//         console.log(url);
        
//         usaRequest = new XMLHttpRequest();
//         usaRequest.open("GET", (url), true);
        
//         usaRequest.setRequestHeader('User-Agent', 'sethbarrie@gmail.com');
//         usaRequest.setRequestHeader('Authorization-Key', `${keys.usajobsAPI}`);
//         usaRequest.setRequestHeader('Host', 'data.usajobs.gov');

//         usaRequest.onreadystatechange = () => {
//             if(usaRequest.readyState == 4 && usaRequest.status == 200) {
//                 return res.json(JSON.parse(usaRequest.responseText));
//             }
//         }

//         usaRequest.send(JSON.stringify(usaRequest))
//     }

// )

// router.post('/git_search',
//     (req, res) => {

//         const { keywords, location, company } = req.body
//         const url = "https://jobs.github.com/positions.json?";
//         let keywordURL = `description=`;
//         let companyURL = ''
//         let locationURL = `&location=`;
//         keywords.split(" ").forEach(word => {
//             keywordURL = keywordURL + `${word}+`
//         });
//         keywordURL = keywordURL.slice(0, keywordURL.length-1);

//         company.split(" ").forEach(word => {
//             companyURL = companyURL + `${word}+`
//         });
//         companyURL = companyURL.slice(0, companyURL.length-1);

//         location.split(" ").forEach(word => {
//             locationURL = locationURL + `${word}+`
//         });
//         locationURL = locationURL.slice(0, locationURL.length-1);

//         githubRequest = new XMLHttpRequest();
//         githubRequest.open("GET", url + keywordURL + locationURL, true);
        
//         githubRequest.onreadystatechange = () => {
//             if(githubRequest.readyState == 4 && githubRequest.status == 200) {
//                 return res.json(JSON.parse(githubRequest.responseText));
//             }
//         }

//         githubRequest.send(JSON.stringify(githubRequest))
//     }

// )

// router.post('/search',
//     (req, res) => {

//         const { keywords, location, company, radius, salary, page } = req.body;
// ///////////////////////////////////////////////////////////////////////
//         const joobleRequest = ({
//             keywords: keywords,
//             location: location,
//             radius: radius,
//             salary: salary,
//             page: page
//         });
//         const joobleURL = "https://jooble.org/api/";
//         const key = keys.joobleAPI;

//         joobleResponse = new XMLHttpRequest();
//         joobleResponse.open("POST", joobleURL + key, true);
//         joobleResponse.setRequestHeader('Content-type', 'application/json');
        
//         joobleResponse.onreadystatechange = () => {
//             if(joobleResponse.readyState == 4 && joobleResponse.status == 200) {
//                 return res.json(JSON.parse(joobleResponse.responseText));
//             }
//         };

//         joobleResponse.send(JSON.stringify(joobleRequest));

//     }
// );
router.put("/:id", (req, res) => {
    Posting.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(post => {
        res.json(post)
    })
    .catch( errors => res.json(errors))
    // .catch(err => res.status(404))
})
   
  
router.post('/search',
    (req, res) => {

        let data = {}
        const { keywords, location, company, radius, salary, page } = req.body;
        let joobleURL = "https://jooble.org/api/";
        let key = keys.joobleAPI;
        let gitURL = "https://jobs.github.com/positions.json?";
        let gitMarkdown = '&markdown=true';
        const joobleRequest = ({
            keywords: `${keywords} ${company}`.trim(),
            location: location,
            radius: radius.trim(),
            salary: salary.trim(),
            page: page
        });

        if(keywords){
            let keywordURL = `description=`;
            keywords.split(" ").forEach(word => {
                keywordURL = keywordURL + `${word}+`;
            });
            keywordURL = keywordURL.slice(0, keywordURL.length-1);
            gitURL = gitURL + keywordURL;
        };
        
        if(location){
            let locationURL = `&location=`;
            let radiusString = `Radius=${radius}&`;
            location.split(" ").forEach(word => {
                locationURL = locationURL + `${word}+`;
            });
            locationURL = locationURL.slice(0, locationURL.length-1);
            gitURL = gitURL + locationURL + radiusString;           
        };

        if(company){
            let companyURL = '';

            company.split(" ").forEach(word => {
                companyURL = companyURL + `${word}+`;
            });
        } else {
            companyURL = '';
        }


        gitURL = gitURL + companyURL + gitMarkdown;
        joobleURL = joobleURL + key;

        let testXMLArr = [joobleURL, gitURL];
        for(let i = 0; i < 2; i++ ){
            responseJSON = new XMLHttpRequest();
            methodRequest = i === 0 ? 'POST' : 'GET';
            
            responseJSON.open(methodRequest, testXMLArr[i], false);
            responseJSON.onreadystatechange = () => {
                if(responseJSON.readyState == 4 && responseJSON.status == 200) {
                    data[i] = (JSON.parse(responseJSON.responseText));
                }
            };
            i === 0 ? responseJSON.send(JSON.stringify(joobleRequest)) 
            : responseJSON.send();
        }
        return res.json(data);
    }
);


router.post('/new',
    (req, res) => {
        const { errors, isValid } = validatePostingInput(req.body);
  
        const newPosting = new Posting({
            posting_id: req.body.posting_id,
            posting_url: req.body.posting_url,
            job_title: req.body.job_title,
            status: req.body.status,
            company: req.body.company,
            salary: req.body.salary,
            description: req.body.description,
            location: req.body.location,
            snippet: req.body.snippet,
            source: req.body.source,
            type: req.body.type,
            link: req.body.link,
            created_at: req.body.created_at,
            company_logo: req.body.company_logo,
            public:  true,
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

router.get('/all', (req, res) => {
    Posting.find()
        .sort({ date: -1 })
        .then(postings => res.json(postings))
        .catch(err => res.status(404).json({ nopostingsfound: 'No postings found' }));
});

router.delete('/:id', (req, res) => {
    Posting.findOneAndDelete({_id: req.params.id.trim()})
        .then(() => {
            res.status(200).json({postingdeleted: 'posting deleted sucessfully'})})
        .catch(err => res.status(404).json({nopostingfound: 'No posting found :D'}))
});


router.put("/:id", (req, res) => {
    Posting.findByIdAndUpdate(req.params.id, req.body)
    .then(posting => res.json(posting)
    .catch(err => res.status(404)
    .json({ updateError: 'Could not update' })))

});
  
module.exports = router;
