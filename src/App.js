import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Episode from './Components/Episode/Episode';
import EpisodeList from './Components/EpisodeList/EpisodeList';
import {RssRequest} from './util/RequestRssData';
import {EpisodesInJson} from './Components/EpisodesInJson/EpisodesInJson';
let episodeList = [];

for(let i=0; i<7; i++) {
  episodeList.push(EpisodesInJson.channel.item[i]);
}

for(let i=0; i<episodeList.length; i++) {
  episodeList[i].image["@href"] = episodeList[i].image["@href"].slice(0,-9) + "300x300.png";
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: episodeList,
    } ;
  }

  // componentDidMount() {
  //   // this.requestRss();
  //   axios.get('https://cors-anywhere.herokuapp.com/http://nj.lizhi.fm/rss/1310979.xml').then(data => {
  //     console.log(data);
  //   })
  //
  // requestRss() {
  //   RssRequest.request()
  // }

  render() {
    return(
      <div>
        <Navbar />
        <EpisodeList episodes={this.state.episodes}/>
        <Footer />
      </div>
    );
  }
}

export default App;
