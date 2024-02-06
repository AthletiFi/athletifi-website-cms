// import Stripe from 'stripe';
// const stripe = new Stripe(process.env.STRAPI_ADMIN_TEST_STRIPE_SECRET_KEY);
const stripe = require('stripe')(process.env.STRAPI_ADMIN_TEST_STRIPE_SECRET_KEY);

module.exports = {
  async handleStripeWebhook(ctx) {
    const sig = ctx.request.headers['stripe-signature'];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        ctx.req.rawBody, // Note: Ensure your server is configured to provide rawBody
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`Webhook Error: ${err.message}`);
      ctx.status = 400;
      return ctx.body = `Webhook Error: ${err.message}`;
    }

    if (event.type === 'payment_intent.succeeded' || event.type === 'charge.succeeded') {
      const paymentIntent = event.data.object;
      // Implement logic based on your application's requirements
      // For example, extracting customer email or ID to find the corresponding Strapi record
      try {
        // Your logic to update the Strapi record
        console.log("CHECK THIS");
        console.log(paymentIntent)
      } catch (error) {
        console.error('Error updating record:', error);
        ctx.status = 500;
        return ctx.body = 'Internal Server Error';
      }
    }

    ctx.status = 200;
    ctx.body = { received: true };
  },
};
