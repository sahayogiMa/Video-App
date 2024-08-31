// src/VideoList.js

import React from 'react';
import './VideoList.css';

function VideoList() {
  // Placeholder data for videos
  const videos = [
    { id: 1, title: "Video 1", description: "Description of Video 1" },
    // Add more video details here
  ];

  return (
    <div className="video-list">
      <h2>Available Videos</h2>
      <ul>
        {videos.map(video => (
          <li key={video.id}>{video.title} - {video.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default VideoList;
