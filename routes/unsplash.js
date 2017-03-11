import express from 'express';
import superagent from 'superagent';

import config from '../config/api';

let router = express.Router();


router.get('/:term', (req, res, next) => {
  const term = req.params.term;
  const url = `https://api.unsplash.com/photos/search?page=1&per_page=20&query=${term}&client_id=${config.app_id}`
  superagent
  .get(url)
  .query({media:'photos', term:term})
  .set('Accept', 'application/json')
  .end((err, result) => {
    var data = JSON.parse(result.text);
    res.json({
      confirmation: 'success',
      result: data,
      title: 'Txel'
    })
  })
})


export default router;
