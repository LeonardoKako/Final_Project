import logo from "../../assets/logo.svg";
import { Header, Titulo } from "./style";
import fundoHeader from "../../assets/fundoHeader.png";

export const HeaderHome = () => (
  <Header style={{ backgroundImage: `url(${fundoHeader})` }}>
    <img src={logo} alt="Logo" />
    <Titulo>Viva experiências gastronômicas no conforto da sua casa </Titulo>
  </Header>
);
