import styles from "./NavBar.module.scss";
import minhaImagem from "../../assets/logo_loja.png";
import classNames from "classnames";
import { RiShoppingCart2Line, RiShoppingCartFill } from "react-icons/ri";
import { BuscaComponent } from "components/Busca/Busca";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const iconeProps = {
  color: "white",
  size: 24,
};

export function NavBarComponent() {
  const location = useLocation();
  const categorias = useSelector((state) => state.categorias);
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);
  return (
    <nav className={styles.nav}>
      <img
        style={{
          width: "100px",
          height: "100px",
        }}
        src={minhaImagem} alt="Descrição da imagem" />
      <div className={styles.links}>
        <div>
          <Link
            to="/"
            className={classNames(styles.link, {
              [styles.selected]: (location.pathname = "/"),
            })}
          >
            Página inicial
          </Link>
        </div>
      </div>
      <div className={styles.categorias}>
        <div className={styles["categorias-title"]}>
          <h1>Categorias</h1>
        </div>
        <div className={styles["categorias-container"]}>
          {categorias.map((categoria, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(`/categoria/${categoria.id}`);
              }}
            >
              {/* <img src={categoria.thumbnail} alt={categoria.nome} /> */}
              <h2
                key={categoria.id}
                className={selectedIndex === index ? styles.selected : ""}
                onClick={() => setSelectedIndex(index)}
              >
                {categoria.nome}
              </h2>
            </div>
          ))}
        </div>
      </div>
      {/* <div className={styles.icones}>
        <Link to="/carrinho">
          {location.pathname == "/carrinho" ? (
            <RiShoppingCartFill {...iconeProps} />
          ) : (
            <RiShoppingCart2Line {...iconeProps} />
          )}
        </Link>
      </div> */}
    </nav>
  );
}
