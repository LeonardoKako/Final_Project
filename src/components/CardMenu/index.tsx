import { Button, Card, Description, Title } from "./style";
import food from "../../assets/food.png";

export const CardMenu = () => {
  return (
    <Card>
      <img src={food} alt="Comida" width={"304px"} />
      <Title>Pizza Marguerita</Title>
      <Description>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </Description>
      <Button>Adicionar ao carrinho</Button>
    </Card>
  );
};
