const sgMail = require('@sendgrid/mail')
const log = console.log

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    // const msg = 
    sgMail.send({
        to: email,
        from: 'attalurisaikrishna@gmail.com',
        subject: 'Welcome to the Task Manager App',
        text: `Welcome to the app, ${name}. Your feedback is important to us, so do let us know how you get along with the application.`
    }).then(() => {
        log('message sent to user')
    }).catch((error) => {
        log(error.response.body)
    })
}

const sendCancellationEmail = (email, name) => {
    // const msg = 
    sgMail.send({
        to: email,
        from: 'attalurisaikrishna@gmail.com',
        subject: 'Thank you for using the Task Manager App',
        text: `Goodbye, ${name}. Sorry to see you go, I hoep to see you back sometime soon.`
    }).then(() => {
        log('message sent to user')
    }).catch((error) => {
        log(error.response.body)
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail,
}