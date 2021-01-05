export const createPosting = posting => {

    // const { title, job_title, location, snippet, salary, source, type, link, company, id, updated, url, description, created_at, how_to_apply} = posting
    let returnedPosting = {
        _id: "",
        posting_id: "",
        posting_url: "",
        job_title: "",
        status: "",
        priority: 0,
        company: "",
        salary: "",
        description: "",
        location: "",
        source: "",
        type: "",
        created_at: "",
        public: true,
        company_logo: "",
        date: ""
    }
    if(posting._id){
        returnedPosting._id = posting._id.toString();
    }
    if(posting.id || posting.posting_id){
        returnedPosting.posting_id = posting.id || posting.posting_id;
        returnedPosting.posting_id = returnedPosting.posting_id.toString();
    }
    if(posting.posting_url || posting.url || posting.link){
        returnedPosting.posting_url = posting.posting_url || posting.url || posting.link;
    }
    if(posting.job_title || posting.title){
        returnedPosting.job_title = posting.job_title || posting.title;
    }
    if(posting.status){
        returnedPosting.status = posting.status;
    }
    if(posting.priority){
        returnedPosting.priority = posting.priority; 
    } else {
        returnedPosting.priority = 1; 
    }
    if(posting.company){
        returnedPosting.company = posting.company;
    }
    if(posting.salary){
        returnedPosting.salary = posting.salary; 
    }
    if(posting.description){
        returnedPosting.description = niceDescription(posting.description);
    }
    if(posting.snippet){
        returnedPosting.description = niceDescription(posting.snippet);
    }
    if(posting.location){
        returnedPosting.location = posting.location;
    }
    if(posting.source){
        returnedPosting.source = posting.source;
    }
    if(posting.type){
        returnedPosting.type = posting.type;
    }
    if(posting.created_at){
        returnedPosting.created_at = posting.created_at;
    }
    if(posting.public !== undefined){
        returnedPosting.public = posting.public;
    } else {
        returnedPosting.public = true;
    }
    if(posting.company_logo){
        returnedPosting.company_logo = posting.company_logo;
    }
    if(posting.date){
        returnedPosting.date = posting.date;
    }
    return returnedPosting;
};

export const saveReadyPost = posting => {
    debugger
    let returnedPosting = {
        posting_id: "",
        posting_url: "",
        job_title: "",
        status: "Haven't applied",
        priority: 1,
        company: "",
        salary: "",
        description: "",
        location: "",
        source: "",
        type: "",
        created_at: Date.now(),
        public: true,
        company_logo: "",
        date: ""
    }
    if(posting._id){
        returnedPosting._id = posting._id;
    }
    if(posting.id || posting.posting_id){
        returnedPosting.posting_id = posting.id || posting.posting_id;
    }
    if(posting.posting_url || posting.url || posting.link){
        returnedPosting.posting_url = posting.posting_url || posting.url || posting.link;
    }
    if(posting.job_title || posting.title){
        returnedPosting.job_title = posting.job_title || posting.title;
    }
    if(posting.status){
        returnedPosting.status = posting.status;
    }
    if(posting.priority){
        returnedPosting.priority = posting.priority; 
    } else {
        returnedPosting.priority = 1; 
    }
    if(posting.company){
        returnedPosting.company = posting.company;
    }
    if(posting.salary){
        returnedPosting.salary = posting.salary; 
    }
    if(posting.description){
        returnedPosting.description = niceDescription(posting.description);
    }
    if(posting.snippet){
        returnedPosting.description = niceDescription(posting.snippet);
    }
    if(posting.location){
        returnedPosting.location = posting.location;
    }
    if(posting.source){
        returnedPosting.source = posting.source;
    }
    if(posting.type){
        returnedPosting.type = posting.type;
    }
    if(posting.created_at){
        returnedPosting.created_at = posting.created_at;
    }
    if(posting.public !== undefined){
        returnedPosting.public = posting.public;
    } else {
        returnedPosting.public = true;
    }
    if(posting.company_logo){
        returnedPosting.company_logo = posting.company_logo;
    }
    if(posting.date){
        returnedPosting.date = posting.date;
    }
    return returnedPosting;
};


const niceDescription = (text) => {
    return text.replace(/<style[^>]*>.*<\/style>/gm, "")
    .replace(/<script[^>]*>.*<\/script>/gm, "")
    .replace(/<[^>]+>/gm, "")
    .replace(/&nbsp/gm, "")
    .replace(/([\r\n]+ +)+/gm, "")
    .replace(/;.../gm, "");
};