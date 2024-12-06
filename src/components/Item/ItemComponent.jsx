import styles from "./ItemComponent.module.scss";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { mudarFavorito } from "../../redux/reducers/categorias/itens";
import classNames from "classnames";
import { mudarCarrinho, mudarQuantidade } from "../../redux/reducers/carrinho";
import { useDispatch, useSelector } from "react-redux";

const iconeProps = {
  size: 24,
  color: "#041833",
};

const quantidadeProps = {
  size: 34,
  color: "#1875E8",
};

export function ItemComponent(props) {
  const { titulo, foto, preco, descricao, favorito, id, carrinho, quantidade } =
    props;
  const dispatch = useDispatch();
  const carrinhoData = useSelector((state) =>
    state.carrinho.some((itemNoCarrinho) => itemNoCarrinho.id == id)
  );

  const resolverFavorito = () => {
    dispatch(mudarFavorito(id));
  };
  const resolverCarrinho = () => {
    dispatch(mudarCarrinho(id));
  };

  return (
    <div
      className={classNames(styles.item, {
        [styles.itemNoCarrinho]: carrinho,
      })}
    >
      <div className={styles["item-imagem"]}>
        <img src={foto} alt={titulo} />
      </div>
      <div className={styles["item-descricao"]}>
        <div className={styles["item-titulo"]}>
          <h2>{titulo}</h2>
          <p>{descricao}</p>
        </div>
        <div className={styles["item-info"]}>
          <div className={styles["item-preco"]}>R$ {preco.toFixed(2)}</div>
          <div className={styles["item-acoes"]}>
            {favorito ? (
              <AiFillHeart
                {...iconeProps}
                color="#ff0000"
                className={styles["item-acao"]}
                onClick={() => {
                  resolverFavorito();
                }}
              />
            ) : (
              <AiOutlineHeart
                {...iconeProps}
                className={styles["item-acao"]}
                onClick={() => {
                  resolverFavorito();
                }}
              />
            )}
            {carrinho ? (
              <div className={styles.quantidade}>
                Quantidade:
                <AiFillMinusCircle
                  {...quantidadeProps}
                  onClick={() => {
                    if (quantidade <= 1) {
                      resolverCarrinho();
                      
                    }
                    dispatch(mudarQuantidade({ id, quantidade: -1 }));
                    

                  }}
                />
                <span>{String(quantidade || 0).padStart(2, "0")}</span>
                <AiFillPlusCircle
                  {...quantidadeProps}
                  onClick={() => {
                    dispatch(mudarQuantidade({ id, quantidade: +1 }));
                  }}
                />
              </div>
            ) : (
              <FaCartPlus
                {...iconeProps}
                color={carrinhoData ? "#1875E8" : iconeProps.color}
                className={styles["item-acao"]}
                onClick={() => {
                  resolverCarrinho();
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
