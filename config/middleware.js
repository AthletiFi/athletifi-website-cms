module.exports = {
    settings: {
      cors: {
        enabled: true,
        origin: ['http://localhost:3000','https://athleti.fi','https://athletifiselect.com'], // replace with the domain of your Next.js application
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'], // allowed HTTP methods
        headers: ['Content-Type', 'Authorization', 'X-Frame-Options'], // allowed headers
      },
    },
  };