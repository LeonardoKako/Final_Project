import { useNavigate } from "react-router-dom";

import headerBackground from "../../assets/fundoHeader.png";
import logo from "../../assets/logo.svg";
import { Header, Titulo } from "./style";

export const HeaderRestaurant = () => {
  const navigate = useNavigate();
  return (
    <Header style={{ backgroundImage: `url(${headerBackground})` }}>
      <Titulo style={{ cursor: "pointer" }} onClick={() => navigate(-1)}>
        Restaurantes
      </Titulo>
      <img src={logo} alt="Logo" />
      <Titulo>0 produto(s) no carrinho</Titulo>
    </Header>
  );
};
