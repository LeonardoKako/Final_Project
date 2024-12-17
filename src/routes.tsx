import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Restaurant } from "./pages/Restaurant";

import hiokiSushi from "./assets/hiokisushi.png";
import laDolce from "./assets/ladolce.png";

const Rotas = () => {
  const cardProps = [
    {
      typeFood: "Italiana",
      name: "La Dolce Vita",
      grade: 4.5,
      description:
        "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
      highlight: false,
      image: laDolce,
    },
    {
      typeFood: "Japonesa",
      name: "Hioki Sushi",
      grade: 4.9,
      description:
        "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
      highlight: true,
      image: hiokiSushi,
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<Home cardProps={cardProps} />} />
      <Route
        path="/restaurant"
        element={<Restaurant cardProps={cardProps} />}
      />
    </Routes>
  );
};

export default Rotas;
