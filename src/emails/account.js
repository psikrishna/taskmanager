const sgMail = require('@sendgrid/mail')
const log = console.log
const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const msg = {
    to: 'attalurisaikrishna@gmail.com',
    from: 'attalurisaikrishna@gmail.com',
    subject: 'sample',
    text: 'sample text sent using node and sendgrid'
}

sgMail.send(msg).then(() => {
    log('message sent')
}).catch((e) => {
    log(e.response.body)
})