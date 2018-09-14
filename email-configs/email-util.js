const emailConfig = require('./email-config')()
const mailgun = require('mailgun-js')(emailConfig)

exports.sendEmail = (client, message ) => 
    console.log('this is the message obj ===>', message)
    new Promise((resolve, reject) => {
        const data = {
            from: client,
            to: 'cmend85@gmail.com',
            text: message.text,
            subject: message.subject,
        }

        mailgun.messages().send(data, (error) => {
            if (error) {
                return reject(error)
            } 
            return resolve()
        })
    })

