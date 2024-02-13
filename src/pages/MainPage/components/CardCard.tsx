import styled from "styled-components";
import { CardsType } from "../../../types/types";
import BottomNav from "./BottomNav";
import { Carouuuusel } from "./Carouuuusel";

type CardCardProps = {
  card: CardsType;
};

const CardCard = ({ card }: CardCardProps) => {
  return (
    <CardContainer>
      <Carouuuusel cards={card} />
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

const CardContainer = styled.div`
  height: 100dvh;
  width: 100dvw;
  scroll-snap-align: center;
  background: #000;
  position: relative;
`;
