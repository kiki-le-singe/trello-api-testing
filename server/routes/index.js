import express from 'express';

export default function (app) {
  const router = express.Router(); // eslint-disable-line

  // test route to make sure everything is working (accessed at GET http://localhost:9000/api)
  router.get('/', (request, response) => {
    response.json({ message: 'hooray! welcome to our api!' });
  });

  // all of our routes will be prefixed with /api
  app.use('/api', router);
}
