import express from 'express';
import superagent from 'superagent';

import config from '../config/api';
let router = express.Router();


router.get('/*', (req, res, next) => {
  res.render('index', { title: 'Whats Up'});
});


export default router;
