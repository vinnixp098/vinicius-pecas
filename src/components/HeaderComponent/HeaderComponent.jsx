import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./HeaderComponentStyle.css";
import { useState } from "react";

export function HeaderComponent() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const isDesktop = window.innerWidth >= 1005;

  return (
    <div className="header">
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" />
        Vinícius Peças
      </div>

      {isDesktop && (
        <nav className="desktop-nav">
          <ul>
            <li>
              <a href="/">Início</a>
            </li>
            {/* <li>
              <a href="/authors">Autores</a>
            </li>
            <li>
              <a href="/genres">Gêneros</a>
            </li> */}
          </ul>
        </nav>
      )}

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </button>

      <div className={`side-drawer ${menuOpen ? "open" : ""}`}>
        <button className="close-drawer" onClick={() => setMenuOpen(false)}>
          ×
        </button>
        <ul>
          <li>
            <a href="/">Início</a>
          </li>
          {/* <li>
            <a href="/authors">Autores</a>
          </li>
          <li>
            <a href="/genres">Gêneros</a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
