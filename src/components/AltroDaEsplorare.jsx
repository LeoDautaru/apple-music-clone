// components/AltroDaEsplorare.jsx

import React from "react";

const AltroDaEsplorare = () => {
  const esploraItems = [
    { id: 1, title: "Top Charts" },
    { id: 2, title: "Nuove Uscite" },
    { id: 3, title: "Playlist Popolari" },
    { id: 4, title: "Scopri di più" },
    { id: 5, title: "Mix del Giorno" },
    { id: 6, title: "Generi Musicali" },
  ];

  return (
    <section className="container my-5">
      <h2 className="text-white mb-4">Altro da esplorare</h2>
      <div className="row g-4">
        {esploraItems.map((item) => (
          <div key={item.id} className="col-12 col-sm-6 col-lg-4">
            <div className="bg-dark text-white d-flex align-items-center justify-content-center rounded p-5 h-100 box-esplora">
              <h5 className="mb-0 text-center">{item.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AltroDaEsplorare;
