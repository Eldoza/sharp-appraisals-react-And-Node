const express = require('express')
const sendMail = express.Router()
const emailUtil = require('./email-configs/email-util')

const { sendEmail } = emailUtil

sendMail.post('/mail', async (req, res, next) => {
    const { client, message } = req.body
    try {
        await sendEmail(client, message)
        res.json({message: 'Your query has been sent'})
        await next()
    } catch (e) {
        await next(e)
    }
})

module.exports = sendMail