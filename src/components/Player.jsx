import React, { useState, useEffect } from "react";

const Player = ({ album }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(
    new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3")
  );
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    audio.volume = newVolume;
  };

  useEffect(() => {
    audio.addEventListener("loadeddata", () => {
      setDuration(audio.duration);
    });

    const timeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("timeupdate", timeUpdate);

    audio.loop = isLooping;

    return () => {
      audio.removeEventListener("timeupdate", timeUpdate);
    };
  }, [audio, isLooping]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  const handleProgressClick = (event) => {
    const progressBar = event.target;
    const clickedPosition = event.nativeEvent.offsetX;
    const newTime = (clickedPosition / progressBar.offsetWidth) * duration;
    audio.currentTime = newTime;
  };

  const toggleLoop = () => {
    setIsLooping(!isLooping);
  };

  const toggleShuffle = () => {
    setIsShuffling(!isShuffling);
  };

  useEffect(() => {
    audio.volume = volume;
  }, [audio, volume]);

  return (
    <div className="player bg-dark text-white p-4">
      <div className="d-flex align-items-center">
        <img
          src={album.cover_big}
          alt={album.title_short}
          className="img-fluid rounded-circle me-4"
          style={{ width: "60px", height: "60px" }}
        />
        <div>
          <h5>{album.title_short}</h5>
          <p>{album.artist.name}</p>
        </div>
      </div>

      <div className="d-flex align-items-center">
        <button
          className={`btn btn-${isPlaying ? "danger" : "success"} me-3`}
          onClick={handlePlayPause}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>

        <div
          className="progress"
          style={{ width: "100%", height: "5px" }}
          onClick={handleProgressClick}
        >
          <div
            className="progress-bar"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
      </div>

      {/* Tempo corrente e durata */}
      <div className="d-flex justify-content-between mt-2">
        <span>{formatTime(currentTime)}</span> {/* Tempo corrente */}
        <span>{formatTime(duration)}</span> {/* Durata totale */}
      </div>

      {/* Volume Slider */}
      <div className="mt-3">
        <label htmlFor="volume" className="me-2 text-white">
          Volume
        </label>
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="form-range"
        />
      </div>

      {}
      <div className="mt-3">
        <button
          className={`btn btn-${isLooping ? "primary" : "secondary"} me-3`}
          onClick={toggleLoop}
        >
          {isLooping ? "Loop: On" : "Loop: Off"}
        </button>

        <button
          className={`btn btn-${isShuffling ? "primary" : "secondary"}`}
          onClick={toggleShuffle}
        >
          {isShuffling ? "Shuffle: On" : "Shuffle: Off"}
        </button>
      </div>
    </div>
  );
};

export default Player;
