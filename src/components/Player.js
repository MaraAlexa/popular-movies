import React, { Component } from 'react';
import { IMG_URL, VIDEO_URL } from '../constants';
import PropTypes from 'prop-types';
import shaka from 'shaka-player';

class Player extends Component {
  componentDidMount() {
    // Install built-in polyfills to patch browser incompatibilities.
    shaka.polyfill.installAll();

    // Check to see if the browser supports the basic APIs Shaka needs.
    if (shaka.Player.isBrowserSupported()) {
      // Everything looks good!
      this.initPlayer();
    } else {
      // This browser does not have the minimum set of APIs we need.
      console.error('Browser not supported!');
    }
  }

  initPlayer() {
    var video = document.getElementById('video');
    var player = new shaka.Player(video);

    // Attach player to the window to make it easy to access in the JS console.
    window.player = player;

    // Listen for error events.
    player.addEventListener('error', this.onErrorEvent);

    // Try to load a manifest.
    // This is an asynchronous process.
    player
      .load(VIDEO_URL)
      .then(function() {
        // This runs if the asynchronous load is successful.
        console.log('The video has now been loaded!');
        if (video.requestFullscreen) {
          console.log('ShakaPlayer: requesting full screen ...');
          video.requestFullscreen();
        } else {
          console.error('ShakaPlayer: full screen not available!');
        }
      })
      .catch(this.onError); // onError is executed if the asynchronous load fails.
  }

  onErrorEvent(event) {
    // Extract the shaka.util.Error object from the event.
    this.onError(event.detail);
  }

  onError(error) {
    // Log the error
    console.error('Error code', error.code, 'object', error);
  }

  componentWillUnmount() {
    // unmount stuff
    // kill stream hogging
  }

  render() {
    const { posterPath } = this.props;
    return (
      <div className="player">
        <video crossOrigin="anonymous" id="video" width="100%" height="100%" poster={`${IMG_URL}${posterPath}`} controls autoPlay />
      </div>
    );
  }
}

Player.propTypes = {
  posterPath: PropTypes.string
};

export default Player;
