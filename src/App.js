import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Episode from './Components/Episode/Episode';
import EpisodeList from './Components/EpisodeList/EpisodeList';
import EpisodeDetail from './Components/EpisodeDetail/EpisodeDetail';
import {RssRequest} from './util/RequestRssData';
import {EpisodesInJson} from './Components/EpisodesInJson/EpisodesInJson';
import Player from './Components/Player/Player';
let episodeList = [];

for(let i=0; i<13; i++) {
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
      selectedEpisode: episodeList[0],
      detailPageActive: false,
      nowPlay: episodeList[1],
    } ;
    this.deactiveDetailPage = this.deactiveDetailPage.bind(this);
    this.handleDetails = this.handleDetails.bind(this);
    this.handleEpisodeChange = this.handleEpisodeChange.bind(this);
  }

  handleDetails(episode) {
  this.setState({
    selectedEpisode: episode,
    detailPageActive: true,
  })
}

  deactiveDetailPage() {
    this.setState({
      detailPageActive: false
    })
  }

  handleEpisodeChange() {
    this.setState({
      nowPlay: this.state.selectedEpisode,
    })
  };

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
        <EpisodeList episodes={this.state.episodes} handleDetails={this.handleDetails}/>
        <EpisodeDetail episodeSelected={this.state.selectedEpisode} active={this.state.detailPageActive} onClose={this.deactiveDetailPage} onEpisodeChange={this.handleEpisodeChange}/>
        <Player track={this.state.nowPlay}
          streamUrl={this.state.nowPlay.enclosure["@url"]}/>
        {console.log(this.state.nowPlay.enclosure["@url"])}
        <Footer />
      </div>
    );
  }
}

export default App;
