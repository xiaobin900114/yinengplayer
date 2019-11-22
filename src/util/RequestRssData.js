// const fetch = require("node-fetch");
// import XMLParser from 'react-xml-parser';

const url = 'https://cors-anywhere.herokuapp.com/http://nj.lizhi.fm/rss/1310979.xml';
const XMLParser = require('react-xml-parser');
const parseString = require('react-native-xml2js').parseString;


export const RssRequest = {
  request() {
    return fetch(url)
    .then(response => {
      console.log(response.text()); 
    })
  }
}

//
// parseString(xml, function (err, result) {
//     console.dir(result);
// });
