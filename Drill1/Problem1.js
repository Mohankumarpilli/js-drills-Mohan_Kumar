// Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

function get_all_emails(data){
    if(!Array.isArray(data)){
        throw new Error("give correct dataset");
    }
    let emails = [];
    for(let index of data){
        if((typeof index != 'object') || typeof index.email != 'string'){
            throw new Error("Give correct data set");
        }
        emails.push(index.email);
    }
    return emails;
}

module.exports = get_all_emails;