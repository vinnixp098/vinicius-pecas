import { createSlice } from "@reduxjs/toolkit";
import eletronicosThumb from "../../../assets/categorias/thumbnail/eletronicos.png";
import escritorioThumb from "../../../assets/categorias/thumbnail/escritorio.png";
import automotivoThumb from "../../../assets/categorias/thumbnail/automotivo.png";
import jogosThumb from "../../../assets/categorias/thumbnail/jogos.png";
import somThumb from "../../../assets/categorias/thumbnail/som.png";
import eletronicosHeader from "../../../assets/categorias/header/eletronicos.png";
import escritorioHeader from "../../../assets/categorias/header/escritorio.png";
import automotivoHeader from "../../../assets/categorias/header/automotivo.png";
import jogosHeader from "../../../assets/categorias/header/jogos.png";
import somHeader from "../../../assets/categorias/header/som.png";

const initialState = [
  {
    nome: "Eletrônicos",
    thumbnail: eletronicosThumb,
    header: eletronicosHeader,
    id: "eletronicos",
    descricao: "Os melhores e mais atuais dispositivos eletrônicos estão aqui!",
  },
  {
    nome: "Automotivo",
    thumbnail: automotivoThumb,
    header: automotivoHeader,
    id: "automotivos",
    descricao: "Aqui você encontra os melhores carros e acessórios para você!",
  },
  {
    nome: "Jogos",
    thumbnail: jogosThumb,
    header: jogosHeader,
    id: "jogos",
    descricao: "Os melhores jogos para você jogar!",
  },
  {
    nome: "Som",
    thumbnail: somThumb,
    header: somHeader,
    id: "som",
    descricao: "Os melhores equipamentos de som para você!",
  },
  {
    nome: "Escritório",
    thumbnail: escritorioThumb,
    header: escritorioHeader,
    id: "escritorio",
    descricao: "Os melhores equipamentos para o seu escritório!",
  },
];

const categoriasSlice = createSlice({
  name: "categorias",
  initialState
});

export const { actions } = categoriasSlice;
export default categoriasSlice;
