import Card from "../Card";
import { Container } from "./style";

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

export const Restaurantes = ({ cardProps }: HomeProps) => {
  return (
    <Container>
      {cardProps.map((restaurant, index) => (
        <Card key={index} {...restaurant} />
      ))}
    </Container>
  );
};
