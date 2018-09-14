module.exports = () => {
    const emailCongfig = {
        apiKey: `${process.env.REACT_APP_MAILGUN_API_KEY}`,
        domain: 'https://api.mailgun.net/v3/sandbox13f57b4067a3489994e01641bbfe43d0.mailgun.org'
    }

    return emailCongfig
}