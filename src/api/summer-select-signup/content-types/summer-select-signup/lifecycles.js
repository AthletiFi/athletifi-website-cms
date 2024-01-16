
module.exports = {
    async afterCreate(event) {
        const { result } = event;

        try {
            await strapi.plugins['email'].services.email.send({
                to: result.email,
                from: `"AthletiFi Select <${strapi.config.get('server.sendgridDefaultEmailFrom')}>"`,
                replyTo: strapi.config.get('server.replyToEmail'),
                subject: 'Thank you for Signing Up for AthletiFi Summer Select 2024!',
                text: '${fieldName}', // Replace with a valid field ID
                html: `
                <!DOCTYPE html>
                <html>
                <head>
                <meta http-equiv="Content-Type" content="text/html; charset=us-ascii">
                <title>AthletiFi Summer Select 2024</title>
                <style>
                body {
                    font-family: Helvetica, sans-serif;
                    color: black;
                }
                a {
                    color: #0563C1;
                    text-decoration: none;
                }
                </style>
                </head>
                <body>
                    <p>Hello ${result.parentFirstName},</p>
                    <p>We are thrilled for your interest in signing up ${result.playerFirstName} for the <a href="https://www.athletifiselect.com/">AthletiFi Summer Select</a> program! Thank you for taking the first step towards an incredible summer of soccer.</p>
                    <p>In the coming weeks, we will share more information about the program schedule, events, payment details and other exciting updates. Keep an eye out for our emails, as they will contain essential information for you to secure your athlete's spot in the program.</p>
                    <p>If you have any immediate questions or need further information, please do not hesitate to contact our team using this email. Your satisfaction and comfort with the program are our top priorities.</p>
                    <p>Once again, welcome to the AthletiFi Summer Select program! Get ready for a summer packed with camaraderie, skill development, and unforgettable moments.</p>
                    <p>Warm regards,<br>
                    AthletiFi Team</p>
                    <p><a href="https://www.athletifiselect.com/"><img src="https://github.com/AthletiFi/athletifi-select-website/assets/33239211/eaa83c9b-b79d-4a13-9ef0-ea3ba6191c72" alt="AthletiFi Summer Select" style="max-width: 100%; height: auto; width: 600px;"></a></p>
                </body>
                </html>
                `,
        });
     } catch (err) {
            console.log(err);
        }
    }
};
 