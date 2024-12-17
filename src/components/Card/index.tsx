import estrela from "../../assets/estrela.svg";
import {
  Button,
  CardRestaurante,
  Description,
  Star,
  Tag,
  Tags,
  Title,
} from "./style";
import { useNavigate } from "react-router-dom";

type CardProps = {
  typeFood: string;
  name: string;
  grade: number;
  description: string;
  highlight: boolean;
  image: string;
};

const Card = ({
  typeFood,
  name,
  grade,
  description,
  highlight,
  image,
}: CardProps) => {
  const navigate = useNavigate();

  const goToRestaurant = () => {
    navigate("/restaurant");
  };

  return (
    <CardRestaurante>
      <img src={image} alt={typeFood} width={"472px"} />
      <Tags>
        {highlight && <Tag>Destaque da semana</Tag>}
        <Tag>{typeFood}</Tag>
      </Tags>
      <div>
        <Title>{name}</Title>
        <span>
          <Title>{grade}</Title>
          <Star src={estrela} alt="Estrela" />
        </span>
      </div>
      <Description>{description}</Description>
      <Button onClick={goToRestaurant}>Saiba mais</Button>
    </CardRestaurante>
  );
};

export default Card;
