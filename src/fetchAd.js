import 'isomorphic-fetch';
import curry from 'lodash.curry';
import vastxml2js from './vastxml2js';

function fetchAd(config = {}, videoAdTag) {
  return fetch(videoAdTag, config)
    .then(res => vastxml2js(res.text()));
}

export default curry(fetchAd, 2);
