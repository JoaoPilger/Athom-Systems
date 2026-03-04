import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img
            src="/logoheader.png"
            alt="Athom System"
            className="footer-logo"
          />
        </div>

        <div className="footer-center">
          <p className="footer-copy">
            @ 2024 Athom System. Todos os direitos reservados
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4 className="footer-title">Athom System</h4>
            <Link to="/#produtos">Produtos</Link>
            <Link to="/pages/quem_somos">Quem Somos</Link>
            <a href="/login">Log In</a>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Social</h4>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

