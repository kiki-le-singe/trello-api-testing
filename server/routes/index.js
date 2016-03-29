import express from 'express';
import Trello from 'node-trello';

import projectConfig from '../../config';

const { KEY, TOKEN } = projectConfig.TRELLO;
const t = new Trello(KEY, TOKEN);

export default function (app) {
  const router = express.Router(); // eslint-disable-line

  // test route to make sure everything is working (accessed at GET http://localhost:9000/api)
  router.get('/', (request, response) => {
    response.json({ message: 'hooray! welcome to our api!' });
  });

  router.route('/lists/:id')
    // Get a simple list or a list with all cards containing only some fields
    .get((req, res) => {
      const { id } = req.params;

      t.get(`/1/lists/${id}`, req.query, (error, data) => {
        if (error) {
          return res.status(404).json({ text: 'So sad...', error });
        }

        return res.status(200).json(data);
      });
    });

  router.route('/cards/:id') // :id [card id or shortlink]
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

  router.route('/cards/:id/list') // :id [card id or shortlink]
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
  app.use('/api', router);
}
