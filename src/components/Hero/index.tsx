import { Image, Name, TelaPreta, Type } from "./style";

type HeroProps = {
  name: string;
  type: string;
  image: string;
};

export const Hero = ({ image, name, type }: HeroProps) => {
  return (
    <Image style={{ backgroundImage: `url(${image})` }}>
      <Type>{type}</Type>
      <Name>{name}</Name>
      <TelaPreta />
    </Image>
  );
};
