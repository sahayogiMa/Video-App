// src/App.js

import React, { useState } from 'react';
import VideoSubmissionForm from './VideoSubmissionForm';
import VideoPlayer from './VideoPlayer';
import './App.css'; // Ensure App.css is imported

function App() {
  const [videoIds, setVideoIds] = useState([]);

  const handleVideoSubmit = (videoId) => {
    setVideoIds([...videoIds, videoId]);
  };

  const removeVideo = (indexToRemove) => {
    setVideoIds(videoIds.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Video App</h1>
        <VideoSubmissionForm onVideoSubmit={handleVideoSubmit} />
      </header>
      <div className="video-list">
        {videoIds.map((id, index) => (
          <VideoPlayer key={index} videoId={id} onRemove={() => removeVideo(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
