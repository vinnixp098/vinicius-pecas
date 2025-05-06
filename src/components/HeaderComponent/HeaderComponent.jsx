import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./HeaderComponentStyle.css";
import { useState } from "react";

export function HeaderComponent() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" />
        Vinícius Peças
      </div>

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
            <a href="/">Gêneros</a>
          </li> */}
          {/* <li>
            <a href="/authors">Autores</a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
