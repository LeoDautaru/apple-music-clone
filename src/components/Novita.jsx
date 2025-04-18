import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import "./Css/Novita.css";
import album1 from "../assets/images/1a.png";
import album2 from "../assets/images/1b.png";

const Novita = () => {
  // Dati fittizi per le card delle novità
  const novitaData = [
    {
      id: 1,
      img: album1,
      title: "Album 1",
      artist: "Artista 1",
      description: "Novità fresca, le ultime uscite in musica",
    },
    {
      id: 2,
      img: album2,
      title: "Album 2",
      artist: "Artista 2",
      description: "Un album imperdibile, esplora ora!",
    },
  ];

  return (
    <div className="novita-section">
      <h2 className="novita-title">Novità</h2>

      {/* Sezione per visualizzare le card */}
      <div className="novita-albums">
        {novitaData.map((album) => (
          <div key={album.id} className="novita-album-card">
            <img
              src={album.img}
              alt={album.title}
              className="novita-album-image"
            />
            <div className="novita-album-info">
              <h5 className="novita-album-title">{album.title}</h5>
              <p className="novita-artist-name">{album.artist}</p>
              <p className="novita-description">{album.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Novita;
