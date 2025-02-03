//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

function individuals_emails(data){
    let emails = [];
    data.forEach(element => {
        emails.push(element.email);
    });
    return emails;
}

module.exports = individuals_emails;