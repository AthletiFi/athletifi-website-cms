module.exports = {
  apps: [
    {
      name: 'strapi',
      cwd: '/home/ubuntu/athletifi-website-cms',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        DATABASE_HOST: '127.0.0.1',
        DATABASE_PORT: '5432',
        DATABASE_NAME: 'strapidatabase',
        DATABASE_USERNAME: 'strapiadmin',
        DATABASE_PASSWORD: '54c43d0ccba8363f76447fb1fe6fd576e2317e9461291646b58c',
       //APP_KEYS: 'TpKwCBIHFs8u2N4FrW9GXQ==,AdCqUOh7zMAvDKEL+ct9+Q==,kGi08OZrGeOMsCy22qci5Q==,suC/ydfyrar7dd+negPWOw==',
        //API_TOKEN_SALT: 'cUV7qgQ2mGCRlPGeVUOe6Q==',
        //ADMIN_JWT_SECRET: 'wQq2pPExq+ALSg22BIqYQA==',
        //JWT_SECRET: 'your jwt secret',
      },
    },
  ],
};

