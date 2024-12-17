import { HeaderHome } from "../../components/HeaderHome";
import { Restaurantes } from "../../components/Restaurantes";
import { Footer } from "../../components/Footer";

type HomeProps = {
  cardProps: {
    typeFood: string;
    name: string;
    grade: number;
    description: string;
    highlight: boolean;
    image: string;
  }[];
};

export const Home = ({ cardProps }: HomeProps) => (
  <>
    <HeaderHome />
    <Restaurantes cardProps={cardProps} />
    <Footer />
  </>
);
