import React from "react";
import "./Css/Radio.css";

import radio1 from "../assets/images/2a.png";
import radio2 from "../assets/images/2b.png";
import radio3 from "../assets/images/2c.png";
import radio4 from "../assets/images/2d.png";

const RadioUscite = () => {
  const radioData = [
    { id: 1, img: radio1, name: "Radio Hits" },
    { id: 2, img: radio2, name: "Top Radio" },
    { id: 3, img: radio3, name: "Indie Waves" },
    { id: 4, img: radio4, name: "HipHop FM" },
  ];

  return (
    <div className="radio-uscite-section">
      <h2 className="radio-uscite-title">Nuove Uscite Radio</h2>

      <div className="radio-uscite-list">
        {radioData.map((radio) => (
          <div key={radio.id} className="radio-card">
            <img src={radio.img} alt={radio.name} className="radio-image" />
            <p className="radio-name">{radio.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioUscite;
