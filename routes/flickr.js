import express from 'express';
import superagent from 'superagent';

import config from '../config/api-flickr';

let router = express.Router();


router.get('/:term', (req, res, next) => {
  const term = req.params.term;
  const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.api_key}&text=${term}&per_page=20&page=1&format=json&nojsoncallback=1`
  superagent
  .get(url)
  .query({media:'photos', term:term})
  .set('Accept', 'application/json')
  .end((err, result) => {
    var data = JSON.parse(result.text);
    res.json({
      confirmation: 'success',
      result: data
    })
  })
})


export default router;
