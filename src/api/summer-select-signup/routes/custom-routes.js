module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/stripe-webhooks',
      handler: 'stripe-webhook.handleStripeWebhook',
      config: {
        auth: false,
      },
    },
  ],
};
