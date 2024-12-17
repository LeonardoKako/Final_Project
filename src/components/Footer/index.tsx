import logo from "../../assets/logo.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import { Container, DescriptionFooter, RedesSociais } from "./style";

export const Footer = () => (
  <Container>
    <img src={logo} alt="Logo" />
    <RedesSociais>
      <img src={instagram} alt="instagram" width={"24px"} />
      <img src={facebook} alt="facebook" width={"24px"} />
      <img src={twitter} alt="twitter" width={"24px"} />
    </RedesSociais>
    <DescriptionFooter>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{" "}
    </DescriptionFooter>
  </Container>
);
