// Path: ./config/functions/bootstrap.js

const cron = require('node-cron');
const {sendPaymentReminders} = require('../src/api/summer-select-signup/services/sendPaymentReminder');


module.exports = async () => {
  if (process.env.SERVE_MODE) {
    // Runs at 11:14 AM UTC on the 6th, 14th, 22nd, and 29th of every month.
    cron.schedule('14 11 6,14,22,29 * *', async () => {
    // cron.schedule('0 0 */8 * *', async () => {
      console.log(`[${new Date().toISOString()}] Cron job running! Time to CRON!!!`);
      await sendPaymentReminders();
    });
    console.log(`[${new Date().toISOString()}] Cron scheduler initialized successfully. This is because SERVE_MODE is set to ${process.env.SERVE_MODE}`);
  }
};

// seconds for testing '*/10 * * * * *'
// 5 days '0 0 */5 * *'
      
