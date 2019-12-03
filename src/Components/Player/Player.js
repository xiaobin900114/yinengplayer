
import React from 'react';
import PropTypes from 'prop-types';
import { PlayButton, Progress, Icons, VolumeControl, Timer } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';
// require('basscss/css/basscss.min.css');
import "./ResetPlayer.css";
import "./Player.css";


class Player extends React.Component {
  render() {
    const { track, currentTime, duration } = this.props;

    return (
      <div className="p2 border navy mt1 mb3 flex flex-center rounded fixed bottom-0 bg-white z4 col-12 mb0">
        <PlayButton className="flex-none h4 mr2 button white btn-big button-outline button-grow bg-orange circle" {...this.props} />
        <div className="flex-auto">
          <h2 className="h4 nowrap caps m0">{track ? track.title : ''}</h2>
          <div className='flex flex-center'>
            <VolumeControl
              className='mr2 flex flex-center'
              buttonClassName="flex-none h6 button white btn-small button-outline button-grow bg-orange circle btn-square"
              {...this.props} />
            <Progress
              className="mt1 mb1 rounded"
              innerClassName="rounded-left"
              value={(currentTime / duration) * 100 || 0}
              {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  resolveUrl: PropTypes.string.isRequired,
  clientId: PropTypes.string.isRequired
};

export default withCustomAudio(Player);
