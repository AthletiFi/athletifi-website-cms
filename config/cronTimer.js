// Path: ./config/functions/bootstrap.js

const cron = require('node-cron');
const {sendPaymentReminders} = require('../src/api/summer-select-signup/services/sendPaymentReminder');


module.exports = async () => {
  if (process.env.SERVE_MODE) {
    cron.schedule('0 0 */8 * *', async () => {
    // cron.schedule('*/10 * * * * *', async () => {
      console.log('Cron job running');
      await sendPaymentReminders();
    });
    console.log(`[${new Date().toISOString()}] Cron scheduler initialized successfully.`);
  }
};

// seconds for testing '*/10 * * * * *'
// 5 days '0 0 */5 * *'
      
