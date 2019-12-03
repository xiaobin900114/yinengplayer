import React from 'react';
import "./EpisodeDetail.css";
import arrow from "../../assets/img/back-arrow.png";


class EpisodeDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      episode: this.props.episodeSelected,
    })
    this.handleEpisodeChange = this.handleEpisodeChange.bind(this)
  }

  handleEpisodeChange() {
    this.props.onEpisodeChange();
  }

  render() {
    let episodeDetail = this.props.active? "episodeDetail" : "episodeDetail-close";


    return(
      <div >
        <div className={episodeDetail}>
          <img src={arrow}  onClick={this.props.onClose} alt="" className="arrow" />
          <div id="episode_info">
            <div className="poster-play">
              <img src={this.props.episodeSelected.image["@href"]} alt=""/>
              <button className="playbutton" onClick={this.handleEpisodeChange}>Play</button>
            </div>
            <div id="episode_detail">
              <div>
                <h1>{this.props.episodeSelected.title}</h1>
                <p>
                  {this.props.episodeSelected.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EpisodeDetail;
