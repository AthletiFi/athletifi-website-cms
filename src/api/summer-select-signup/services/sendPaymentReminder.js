module.exports = {
    async sendPaymentReminders() {
      const tenDaysAgo = new Date();
      tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);
    const summerSelectSignupService = strapi.query('api::summer-select-signup.summer-select-signup');
    const users = await summerSelectSignupService.findMany({
        where: { 
          stripePaid: false, 
          eligible: true,
          updatedAt: tenDaysAgo
      }, 
    });
      for (const user of users) {
        const emailContent = {
          to: user.email,
          from: `AthletiFi Select <${process.env.SENDGRID_DEFAULT_EMAIL_FROM}>`,
          replyTo: process.env.SENDGRID_DEFAULT_EMAIL_REPLY_TO,
          subject: "need to pay",
          text: `Hello ${user.parentFirstName},
  
          pay now: ${user.parentFirstName}`,
        };
  
        try {
          await strapi.plugins['email'].services.email.send(emailContent);
          console.log(`Payment reminder sent to ${user.email}`);
        } catch ({ response }) {
          console.log(response.body);
        }
      }
  }}