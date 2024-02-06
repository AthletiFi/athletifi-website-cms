module.exports = (strapi) => {
  return async (ctx, next) => {
    if (ctx.url === '/stripe-webhooks') { // Target only your Stripe webhook route
      ctx.req.rawBody = '';
      await new Promise((resolve, reject) => {
        ctx.req.on('data', (chunk) => {
          ctx.req.rawBody += chunk;
        });
        ctx.req.on('end', resolve);
        ctx.req.on('error', reject);
      });
    }
    await next();
  };
};
