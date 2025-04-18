import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-secondary py-4 mt-5">
      <div className="container text-center">
        <div className="mb-2">
          <small>Italia | English (UK)</small>
        </div>

        <div className="d-flex flex-wrap justify-content-center mb-2">
          <a
            href="#"
            className="text-secondary mx-2 mb-1 small text-decoration-none"
          >
            Condizioni dei servizi internet
          </a>
          <a
            href="#"
            className="text-secondary mx-2 mb-1 small text-decoration-none"
          >
            Apple Music e privacy
          </a>
          <a
            href="#"
            className="text-secondary mx-2 mb-1 small text-decoration-none"
          >
            Avviso sui cookie
          </a>
          <a
            href="#"
            className="text-secondary mx-2 mb-1 small text-decoration-none"
          >
            Supporto
          </a>
          <a
            href="#"
            className="text-secondary mx-2 mb-1 small text-decoration-none"
          >
            Feedback
          </a>
        </div>

        <div>
          <small className="text-muted">
            &copy; 2024 Apple Inc. Tutti i diritti riservati.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
