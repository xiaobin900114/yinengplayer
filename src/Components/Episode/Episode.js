import React from 'react';
import './Episode.css';

class Episode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.callDetail = this.callDetail.bind(this);
  }

  callDetail() {
    this.props.handleDetails(this.props.episodeInfo);
  }

  render(){
    return(
      <img src={this.props.episodeInfo.image["@href"]} onClick={this.callDetail} id="episode" alt=""/>
    )
  }
}

export default Episode;
