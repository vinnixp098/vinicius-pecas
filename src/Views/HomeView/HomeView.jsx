import HeaderComponent from "components/Header/Header";
import styles from "./HomeView.module.scss";
import relogio from "../../assets/inicial.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function HomeView() {
  const navigate = useNavigate();
  const categorias = useSelector((state) => state.categorias);
  return (
    <div>
      <HeaderComponent
        titulo="Classificados Tech"
        descricao="Compre diversos tipos de produtos do melhor sites de vendas do Brasil"
        imagem={relogio}
        className={styles.header}
      />
      {/* <div className={styles.categorias}>
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
              <img src={categoria.thumbnail} alt={categoria.nome} />
              <h2>{categoria.nome}</h2>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
