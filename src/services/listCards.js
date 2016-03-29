import request from 'superagent';

import api from 'config/api.json';

function fetch(id, options = {}) {
  return request
    .get(`${api.listCards}/${id}`)
    .query(options);
}

export { fetch };
