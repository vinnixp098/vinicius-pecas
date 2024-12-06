import { PageInit } from "components/PageInit/PageInit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarrinhoView } from "Views/CarrinhoView/CarrinhoView";
import { CategoriaView } from "Views/CategoriaView/CategoriaView";
import { HomeView } from "Views/HomeView/HomeView";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageInit />}>
          <Route index element={<HomeView />} />
          <Route path="/categoria/:nomeCategoria" element={<CategoriaView />} />
          <Route path="/carrinho" element={<CarrinhoView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
console.log("AppRoutes component rendered");
