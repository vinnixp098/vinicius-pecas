import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./HeaderComponentStyle.css";

export function HeaderComponent() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" />
        <p>
          <strong>Vinícius Peças</strong>
        </p>
      </div>
      <div className="nav">
        <ul>
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="/">Gêneros</a>
          </li>
          <li>
            <a href="/authors">Autores</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
