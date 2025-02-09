// Path: ./config/functions/bootstrap.js

const cron = require('node-cron');
const {sendPaymentReminder, sendInfoSessionEmail} = require('../src/api/summer-select-signup/services/sendEmails');

module.exports = async () => {
  if (process.env.SERVE_MODE) {
    // cron.schedule('14 11 6,14,22,29 * *', async () => { // Runs at 11:14 AM UTC on the 6th, 14th, 22nd, and 29th of every month.
    cron.schedule('14 11 * * *', async () => { // Runs every day at 11:14 AM UTC.
    // cron.schedule('*/10 * * * * *', async () => { // Runs every 10 seconds
      console.log(`[${new Date().toISOString()}] Cron job running! Time to CRON!!!`);
      await sendPaymentReminder();
    });

    // Schedule the new email to be sent on May 20th, 2024 at 11:00 AM UTC
    // cron.schedule('0 11 20 5 *', async () => {
    // // cron.schedule('*/45 * * * * *', async () => { // Runs every 45 seconds
    //   console.log(`[${new Date().toISOString()}] Sending info session email! `);
    //   await sendInfoSessionEmail();
    // });

    console.log(`[${new Date().toISOString()}] Cron scheduler initialized successfully. This is because SERVE_MODE is set to ${process.env.SERVE_MODE}`);
  }
};

// seconds for testing '*/10 * * * * *'
// 5 days '0 0 */5 * *'
      
