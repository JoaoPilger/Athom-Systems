import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  const [produtosOpen, setProdutosOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <img src="/logoheader.png" alt="Athom System" className="header-logo-img" />
        </Link>

        <nav className="header-nav">
          <Link to="/pages/quem_somos" className="header-nav-link">Quem somos</Link>
          <div
            className="header-nav-dropdown"
            onMouseEnter={() => setProdutosOpen(true)}
            onMouseLeave={() => setProdutosOpen(false)}
          >
            <button type="button" className="header-nav-link header-nav-link--dropdown" aria-expanded={produtosOpen} aria-haspopup="true">
              Produtos
              <span className="header-nav-caret" aria-hidden="true">▾</span>
            </button>
            {produtosOpen && (
              <ul className="header-dropdown-menu" role="menu">
                <li role="none"><Link to="/#produtos" role="menuitem">Nossos produtos</Link></li>
              </ul>
            )}
          </div>
          <Link to="/#contato" className="header-nav-link">Contato</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
