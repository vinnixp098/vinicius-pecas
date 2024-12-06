import HeaderComponent from "components/Header/Header";
import styles from "./CarrinhoView.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { ItemComponent } from "components/Item/ItemComponent";
import { resetarCarrinho } from "../../redux/reducers/carrinho";

export function CarrinhoView() {
  const dispatch = useDispatch();
  const { carrinho, total } = useSelector((state) => {
    let total = 0;
    const regexp = new RegExp(state.busca, "i");
    const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
      const item = state.itens.find((item) => item.id === itemNoCarrinho.id);
      total += item.preco * itemNoCarrinho.quantidade;
      if (item.titulo.match(regexp)) {
        itens.push({
          ...item,
          quantidade: itemNoCarrinho.quantidade,
        });
      }
      return itens;
    }, []);
    return { carrinho: carrinhoReduce, total: total };
  });
  return (
    <div>
      <HeaderComponent
        titulo="Carrinho de compras"
        descricao="Confira o seu carrinho de compras"
      />
      <div className={styles.carrinho}>
        {carrinho.map((item) => (
          <ItemComponent key={item.id} {...item} carrinho />
        ))}
        <div className={styles.total}>
          <strong>Resumo da compra</strong>
          <span>
            Subtotal: <strong>R$ {total.toFixed(2)}</strong>
          </span>
        </div>
        <button
          className={styles.finalizar}
          onClick={() => {
            dispatch(resetarCarrinho());
          }}
        >
          Finalizar
        </button>
      </div>
    </div>
  );
}
