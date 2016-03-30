import express from 'express'; // Web framework
import webpack from 'webpack';
import path from 'path';
import bodyParser from 'body-parser';

import logger from './logger';
import routes from './routes';
import webpackDevMiddleware from './middleware/webpack-dev';
import webpackHotMiddleware from './middleware/webpack-hot';
import projectConfig from '../config';
import webpackConfig from '../webpack/dev.config.js';

const app = express(); // define server
const compiler = webpack(webpackConfig);

// Config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.resolve('src/assets')));

/* *******************
webpack configuration
******************* */

app.use(webpackDevMiddleware(compiler, webpackConfig.output.publicPath));
app.use(webpackHotMiddleware(compiler));


/* ******************
 ROUTES FOR OUR API
******************* */

routes(app);


/* ****************
 START THE SERVER
***************** */

app.listen(projectConfig.SERVER_PORT, projectConfig.SERVER_HOSTNAME, () => {
  logger.info(`Express server listening on http://${projectConfig.SERVER_HOSTNAME}:${projectConfig.SERVER_PORT} in ${app.settings.env} node`);
});
