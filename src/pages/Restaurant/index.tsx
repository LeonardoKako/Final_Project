import { Menu } from "../../components/Menu";
import { Footer } from "../../components/Footer";
import { HeaderRestaurant } from "../../components/HeaderRestaurant";
import { Hero } from "../../components/Hero";

type RestaurantProps = {
  cardProps: {
    typeFood: string;
    name: string;
    grade: number;
    description: string;
    highlight: boolean;
    image: string;
  }[];
};

export const Restaurant = ({ cardProps }: RestaurantProps) => {
  const restaurant = cardProps[0];
  return (
    <>
      <HeaderRestaurant />
      <Hero
        name={restaurant.name}
        type={restaurant.typeFood}
        image={restaurant.image}
      />
      <Menu />
      <Footer />
    </>
  );
};
