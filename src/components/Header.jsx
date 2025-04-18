import React from "react";
import logo from "../assets/logos/music.svg";

const Header = () => {
  return (
    <>
      <header className="d-flex justify-content-between align-items-center p-3 bg-dark text-white">
        {}
        <button
          className="btn btn-link p-0 text-danger"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasMenu"
          aria-controls="offcanvasMenu"
        >
          <i className="bi bi-list fs-3"></i>
        </button>

        {}
        <img src={logo} alt="Logo" style={{ height: "40px" }} />

        {}
        <button className="btn btn-danger btn-sm rounded-pill">Accedi</button>
      </header>

      {}
      <div
        className="offcanvas offcanvas-start bg-dark text-white"
        tabIndex="-1"
        id="offcanvasMenu"
        aria-labelledby="offcanvasMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasMenuLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li className="mb-3">
              <a href="#" className="text-white text-decoration-none">
                Home
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-white text-decoration-none">
                Cerca
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-white text-decoration-none">
                Libreria
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-decoration-none">
                Impostazioni
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
