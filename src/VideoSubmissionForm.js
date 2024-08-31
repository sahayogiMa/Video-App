// src/VideoSubmissionForm.js

import React, { useState } from 'react';
import './VideoSubmissionForm.css'; // Ensure you have the CSS file

function VideoSubmissionForm({ onVideoSubmit }) {
  const [videoUrl, setVideoUrl] = useState('');
  const [error, setError] = useState(''); // Add state to manage error messages

  const isValidYouTubeUrl = (url) => {
    const pattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    return pattern.test(url);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidYouTubeUrl(videoUrl)) {
      // Extract the video ID using a regular expression
      const videoIdMatch = videoUrl.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
      const videoId = videoIdMatch ? videoIdMatch[1] : null;

      if (videoId) {
        onVideoSubmit(videoId);
        setError(''); // Clear any previous error messages
      } else {
        setError('The YouTube URL must contain a video ID.');
      }
    } else {
      setError('Please enter a valid YouTube URL.');
    }
  };

  return (
    <div className="video-submission-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="video-url-input" className="url-input-label">
          Enter a valid YouTube URL
        </label>
        <input
          id="video-url-input"
          type="text"
          className="video-input"
          placeholder="Enter YouTube video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <button type="submit" className="submit-button">Add Video</button>
        {error && <p className="error-message">{error}</p>} {/* Display error message if present */}
      </form>
    </div>
  );
}

export default VideoSubmissionForm;
