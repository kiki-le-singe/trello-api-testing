import express from 'express';
import Trello from 'node-trello';

import logger from '../logger';
import projectConfig from '../../config';

const { KEY, TOKEN } = projectConfig.TRELLO;
const t = new Trello(KEY, TOKEN);

export default function (app) {
  const router = express.Router(); // eslint-disable-line
  const routerAPI = express.Router(); // eslint-disable-line

  router.get('/trelloCallback', (req, res) => {
    res.status(200).json({ message: 'hooray! welcome to our trelloCallback!' });
  });

  // listening to POST requests at `/trelloCallback`,
  // because it is our endpoint for Trello's webhooks.
  router.post('/trelloCallback', (req, res) => {
    const data = req.body;
    const { model, action } = data;
    const { type, memberCreator } = action;
    const { name } = model;

    logger.info('Webhook received!');
    logger.info(`model: ${name}`);
    logger.info(`actionType: ${type}`);
    logger.info(`memberCreator: ${memberCreator.fullName}`);
    console.log(data);
  });

  // test route to make sure everything is working (accessed at GET http://localhost:9000/api)
  routerAPI.get('/', (request, response) => {
    response.json({ message: 'hooray! welcome to our api!' });
  });

  routerAPI.route('/tokens/webhooks')
    // Create a Webhook
    .get((req, res) => {
      const datas = {
        description: 'My first webhook',
        callbackURL: 'http://localhost:8080/trelloCallback',
        idModel: '56c198b9c6220124fdfa2e70',
      };

      t.post(`/1/tokens/${TOKEN}/webhooks`, datas, (error, data) => {
        if (error) {
          return res.status(404).json({ text: 'So sad...', error });
        }

        return res.status(200).json(data);
      });
    });

  routerAPI.route('/lists/:id')
    // Get a simple list or a list with all cards containing only some fields
    .get((req, res) => {
      const { id } = req.params;

      // NOTE: It is possible to use this API:
      // GET /1/lists/[idList]/cards - Get an array of Cards on a List
      t.get(`/1/lists/${id}`, req.query, (error, data) => {
        if (error) {
          return res.status(404).json({ text: 'So sad...', error });
        }

        return res.status(200).json(data);
      });
    });

  routerAPI.route('/cards/:id') // :id [card id or shortlink]
    // Get a card
    .get((req, res) => {
      const { id } = req.params;

      t.get(`/1/cards/${id}`, (error, data) => {
        if (error) {
          return res.status(404).json({ text: 'So sad...', error });
        }

        return res.status(200).json(data);
      });
    });

  routerAPI.route('/cards/:id/list') // :id [card id or shortlink]
    // Get a list from a card
    .get((req, res) => {
      const { id } = req.params;

      t.get(`/1/cards/${id}/list`, (error, data) => {
        if (error) {
          return res.status(404).json({ text: 'So sad...', error });
        }

        return res.status(200).json(data);
      });
    });

  // all of our routes will be prefixed with /api
  app.use('/api', routerAPI);
  app.use(router);
}
