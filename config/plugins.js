// ~/strapi-aws-s3/backend/config/plugins.js

module.exports = ({ env }) => ({
  transformer: {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    },
  },
  email: {
    config: {
      provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: env('SENDGRID_DEFAULT_EMAIL_FROM'),
        defaultReplyTo: env('SENDGRID_DEFAULT_EMAIL_REPLY_TO'),
      },
    },
  },
});


