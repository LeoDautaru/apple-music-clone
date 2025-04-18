import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./Loader";
import Player from "./Player";

const NewReleases = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const fetchAlbums = async () => {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem"
        );
        const data = await response.json();
        setAlbums(data.data.slice(0, 10));
      } catch (error) {
        console.error("Errore durante il fetch", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  useEffect(() => {
    if (!loading) {
      AOS.refresh();
    }
  }, [loading]);

  const handleCardClick = (album) => {
    setSelectedAlbum(album);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="p-3">
      <h2 className="text-white mb-4">Nuove Uscite</h2>
      <div className="row g-3">
        {albums.map((album) => (
          <div
            key={album.id}
            className="col-6 col-md-4 col-lg-2"
            data-aos="fade-up"
            onClick={() => handleCardClick(album)}
          >
            <div className="card bg-dark text-white border-0">
              <img
                src={album.album.cover_medium}
                className="card-img-top rounded"
                alt={album.title}
              />
              <div className="card-body p-2">
                <h6 className="card-title small mb-0">{album.title_short}</h6>
                <p className="card-text small text-muted">
                  {album.artist.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {}
      {selectedAlbum && <Player album={selectedAlbum} />}
    </section>
  );
};

export default NewReleases;
