import { configureStore } from "@reduxjs/toolkit";
import categoriasSlice from "./reducers/categorias/categorias";
import itensSlice from "./reducers/categorias/itens";
import carrinhoSlice from "./reducers/carrinho";
import buscaSlice from "./reducers/busca";

const store = configureStore({
  reducer: {
    categorias: categoriasSlice.reducer,
    itens: itensSlice.reducer,
    carrinho: carrinhoSlice.reducer,
    busca: buscaSlice.reducer,
  },
});

export default store;
