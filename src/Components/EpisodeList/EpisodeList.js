import React from 'react';
import "./EpisodeList.css";
//import Offshoot from "../Offshoot";
import Episode from "../Episode/Episode";
import InfiniteScroll from 'react-infinite-scroller';

const officeList = [
  "Los Angeles",
  "Shanghai",
  "Tokyo"
]

class EpisodeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      officeSelected: '',
    })
    this.handleOfficeChange = this.handleOfficeChange.bind(this)
  }

  handleOfficeChange(office) {
    this.props.onOfficeChange(office);
  }

  render() {
    return(
      <div id="episode-list">
        <h1>Episodes</h1>
        <div id="img_container">
          {
            Object.keys(this.props.episodes).map(key => {
              let episodeInfo = this.props.episodes[key];
              // console.log(episodeInfo.image["@href"]);
              return <Episode key={key} episodeInfo={episodeInfo} handleDetails={this.props.handleDetails}/>;
            })
          }
        </div>
      </div>
    );
  }
}

export default EpisodeList;
