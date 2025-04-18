import React from "react";

const MusicCard = ({ song }) => {
  return (
    <div className="col-6 col-md-3 mb-3">
      <div className="card h-100 shadow-sm border-0 hover-shadow">
        <img
          src={song.album.cover_medium}
          className="card-img-top"
          alt={song.title}
        />
        <div className="card-body text-center p-2">
          <h6 className="card-title mb-0 small">{song.title}</h6>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
