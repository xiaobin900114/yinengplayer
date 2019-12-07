import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Episode from './Components/Episode/Episode';
import EpisodeList from './Components/EpisodeList/EpisodeList';
import EpisodeDetail from './Components/EpisodeDetail/EpisodeDetail';
// import {RssRequest} from './util/RequestRssData';
import {EpisodesInJson} from './Components/EpisodesInJson/EpisodesInJson';
import Player from './Components/Player/2ndPlayer';
// import InfiniteScroll from 'react-infinite-scroller';

let episodeList = [];

// for(let i=0; i<1; i++) {
//   if(EpisodesInJson.channel.item[i].image){
//     episodeList.push(EpisodesInJson.channel.item[i]);
//   }
// }
//
// for(let j=0; j<episodeList.length; j++) {
//   if(episodeList[j].image["@href"].slice(-3) == "png") {
//     episodeList[j].image["@href"] = episodeList[j].image["@href"].slice(0,-9) + "300x300.png";
//   } else {
//     episodeList[j].image["@href"] = episodeList[j].image["@href"].slice(0,-9) + "300x300.jpg";
//   }
// }
// let numOfEpisodes = 0;
//

EpisodesInJson.channel.item.map((item,i) => {
  if(EpisodesInJson.channel.item[i].image){
    if(EpisodesInJson.channel.item[i].image["@href"].slice(-3) == "png") {
      EpisodesInJson.channel.item[i].image["@href"] = EpisodesInJson.channel.item[i].image["@href"].slice(0,-9) + "300x300.png";
    } else {
      EpisodesInJson.channel.item[i].image["@href"] = EpisodesInJson.channel.item[i].image["@href"].slice(0,-9) + "300x300.jpg";
    };
    if(EpisodesInJson.channel.item[i].description) {
      EpisodesInJson.channel.item[i].description = EpisodesInJson.channel.item[i].description.replace(/<br\s*\/?>/mg,"\n")
    }
    console.log(EpisodesInJson.channel.item[i].description);
    episodeList.push(EpisodesInJson.channel.item[i]);
  }
})

// for(let i=0; i<200; i++) {
//   if(EpisodesInJson.channel.item[i].image){
//     if(EpisodesInJson.channel.item[i].image["@href"].slice(-3) == "png") {
//       EpisodesInJson.channel.item[i].image["@href"] = EpisodesInJson.channel.item[i].image["@href"].slice(0,-9) + "300x300.png";
//     } else {
//       EpisodesInJson.channel.item[i].image["@href"] = EpisodesInJson.channel.item[i].image["@href"].slice(0,-9) + "300x300.jpg";
//     };
//     if(EpisodesInJson.channel.item[i].description) {
//       EpisodesInJson.channel.item[i].description = EpisodesInJson.channel.item[i].description.replace(/<br\s*\/?>/mg,"\n")
//     }
//     console.log(EpisodesInJson.channel.item[i].description);
//     episodeList.push(EpisodesInJson.channel.item[i]);
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: episodeList,
      selectedEpisode: episodeList[0],
      detailPageActive: false,
      nowPlay:[
        {
          name: episodeList[0].title,
          singer: episodeList[0].author,
          cover: episodeList[0].image["@href"],
          musicSrc: episodeList[0].enclosure["@url"]
        },
      ]
    } ;
    this.deactiveDetailPage = this.deactiveDetailPage.bind(this);
    this.handleDetails = this.handleDetails.bind(this);
    this.handleEpisodeChange = this.handleEpisodeChange.bind(this);
    this.loadEpisodes = this.loadEpisodes.bind(this);
  }

  loadEpisodes() {
    for(let i=0; i<200; i++) {
      if(EpisodesInJson.channel.item[i].image){
        if(EpisodesInJson.channel.item[i].image["@href"].slice(-3) == "png") {
          EpisodesInJson.channel.item[i].image["@href"] = EpisodesInJson.channel.item[i].image["@href"].slice(0,-9) + "300x300.png";
        } else {
          EpisodesInJson.channel.item[i].image["@href"] = EpisodesInJson.channel.item[i].image["@href"].slice(0,-9) + "300x300.jpg";
        };
        episodeList.push(EpisodesInJson.channel.item[i]);
      }
    }
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
      nowPlay: [{
        name: this.state.selectedEpisode.title,
        singer: this.state.selectedEpisode.author,
        cover: this.state.selectedEpisode.image["@href"],
        musicSrc: this.state.selectedEpisode.enclosure["@url"]
      }]
    })
    // console.log(this.state.nowPlay);
  };

  render() {

    return(
      <div>
        <Navbar />
        <EpisodeList episodes={this.state.episodes} handleDetails={this.handleDetails} loadEpisodes={this.loadEpisodes}/>
        <EpisodeDetail episodeSelected={this.state.selectedEpisode} active={this.state.detailPageActive} onClose={this.deactiveDetailPage} onEpisodeChange={this.handleEpisodeChange}/>
        <Player audioLists={this.state.nowPlay}/>
      </div>
    );
  }
}

export default App;
