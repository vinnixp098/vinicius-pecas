import { useSelector, useDispatch } from "react-redux";
import styles from "./Busca.module.scss";
import { mudarBusca, resetarBusca } from "../../redux/reducers/busca";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function BuscaComponent() {
  const busca = useSelector((state) => state.busca);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetarBusca());
  }, [location.pathname, dispatch]);
  return (
    <div className={styles.busca}>
      <input
        className={styles.input}
        type="text"
        placeholder="Buscar produto"
        value={busca}
        onChange={(evento) => dispatch(mudarBusca(evento.target.value))}
      />
    </div>
  );
}
