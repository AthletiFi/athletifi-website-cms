// Path: ./config/functions/bootstrap.js

const cron = require('node-cron');
const {sendPaymentReminders} = require('../src/api/summer-select-signup/services/sendPaymentReminder'); // Add missing import statement


module.exports = async () => {
    cron.schedule('0 0 */8 * *', async () => {
    // cron.schedule('*/20 * * * * *', async () => {
        console.log('Cron job running');
        await sendPaymentReminders();
    });
};

// seconds for testing '*/10 * * * * *'
// 5 days '0 0 */5 * *'