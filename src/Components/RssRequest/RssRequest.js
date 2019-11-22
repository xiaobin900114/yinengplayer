// const fetch = require("node-fetch");
import XMLParser from 'react-xml-parser'

const url = 'https://cors-anywhere.herokuapp.com/http://nj.lizhi.fm/rss/1310979.json';
// const XMLParser = require('react-xml-parser');


export const RssRequest = {
  request() {
    return fetch(url)
    .then(response => {
      return response;
    })
  }
}
