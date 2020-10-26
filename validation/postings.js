const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePostingsInput(data) {
    let errors = {};

    data.user = validText(data.user) ? data.user : '';
    data.posting_url = validText(data.posting_url) ? data.posting_url : '';
    data.company = validText(data.company) ? data.company : '';
    data.description = validText(data.description) ? data.description : '';

    if (Validator.isEmpty(data.user)) {
        errors.text = 'Need User to assign posting to';
    }

    if (Validator.isEmpty(data.posting_url)) {
        errors.text = 'Need url to scrape data from';
    }

    if (Validator.isEmpty(data.company)) {
        errors.text = 'Company is required';
    }

    if (Validator.isEmpty(data.description)) {
        errors.text = 'Job posting description required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};
