import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import { CardsType } from "../../../types/types";
import BottomNav from "./BottomNav";

type CardCardProps = {
  card: CardsType;
};

const CardCard = ({ card }: CardCardProps) => {
  const [index, setIndex] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);

  const next = () => {
    if (index >= card.imagessrc.length - 1) return;
    setIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (index === 0) return;
    setIndex((prev) => prev - 1);
  };

  return (
    <CardContainer>
      {index !== 0 && <StyledLeftArrow size={50} onClick={prev} />}
      {index !== card.imagessrc.length - 1 && (
        <StyledRightArrow size={50} onClick={next} />
      )}
      <StyledImage src={card.imagessrc[index]} />
      <CenteredSpan ref={spanRef}>{7}</CenteredSpan>
      <BottomNav
        profilePic={card.profilePic}
        username={card.username}
        caption={card.caption}
        comments={card.comments}
      />
    </CardContainer>
  );
};

export default CardCard;

const CenteredSpan = styled.span`
  color: transparent;
  font-size: 5rem;
  font-weight: 700;
  z-index: 1;
`;

const CardContainer = styled.div`
  height: ${window.innerHeight}px;
  width: 100vw;
  scroll-snap-align: center;
  background: #000;
  position: relative;
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const StyledLeftArrow = styled(FaChevronLeft)`
  position: absolute;
  top: 60%;
  left: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  border: 3px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  color: lightyellow;
  z-index: 1;
  padding: 10px;
  animation: crescendo 0.5s infinite ease-in-out alternate;

  @keyframes crescendo {
    0% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1.05);
    }
  }
`;

const StyledRightArrow = styled(FaChevronRight)`
  position: absolute;
  top: 60%;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  border: 3px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  color: lightyellow;
  z-index: 1;
  padding: 10px;
  animation: crescendo 0.5s infinite ease-in-out alternate;

  @keyframes crescendo {
    0% {
      transform: scale(0.975);
    }
    100% {
      transform: scale(1.025);
    }
  }
`;
