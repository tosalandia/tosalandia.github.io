import Slider from "react-slick";
import styled from "styled-components";
import { CardsType } from "../../../types/types";

type CarooouuuselProps = {
  cards: CardsType;
};

export const Carouuuusel = ({ cards }: CarooouuuselProps) => {
  return (
    <Slider
      autoplay={false}
      infinite={false}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      adaptiveHeight={true}
      variableWidth={false}
    >
      {cards.imagessrc.map((item, index) => (
        <StyledImage key={index} src={item} />
      ))}
    </Slider>
  );
};

const StyledImage = styled.img`
  width: 100%;
  margin-top: 10dvh;
  margin-bottom: 10dvh;
  height: 70dvh;
`;
