// src/VideoPlayer.js

import React from 'react';
import './VideoPlayer.css';

function VideoPlayer({ videoId, onRemove }) {
  const youtubeVideoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-entry">
      <iframe
  width="560"
  height="315"
  src={youtubeVideoUrl}
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
  allowFullScreen
  title="Embedded YouTube Video"
></iframe>

      <button className="remove-button" onClick={onRemove}>Remove Video</button>
    </div>
  );
}

export default VideoPlayer;
