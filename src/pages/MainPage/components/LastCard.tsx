import { Button } from "@mui/material";
import { useRef } from "react";
import styled from "styled-components";
import { finalVideoSrc } from "../../../fakeData/fakedata";

type LastCardProps = {
  goBack: () => void;
};

const LastCard = ({ goBack }: LastCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <VideoContainer>
      <Container ref={ref}>
        <StyledVideo autoPlay loop>
          <source src={finalVideoSrc} type="video/mp4" />
        </StyledVideo>
        <BackdropContainer>
          <StyledTitle>¡Eso es todo amigos!</StyledTitle>
          <StyledSecondaryTitle>
            Feliz San Valentín. Te quiero mucho Tosa
          </StyledSecondaryTitle>
          <StyledButton variant="outlined" color="primary" onClick={goBack}>
            Volver al inicio
          </StyledButton>
        </BackdropContainer>
      </Container>
    </VideoContainer>
  );
};

export default LastCard;

const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoContainer = styled.div`
  height: ${window.innerHeight}px;
  width: 100vw;
  scroll-snap-align: center;
  background: #000;
  position: relative;
`;

const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  color: #fff;
  text-align: center;
  padding: 0 20px;
`;

const StyledSecondaryTitle = styled.h2`
  color: #fff;
  text-align: center;
  padding: 0 20px;
`;

const StyledButton = styled(Button)`
  && {
    background-color: #fff;
    color: #000;
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    border-radius: 10px;
  }

  &&:hover {
    background-color: #fff;
    color: #000;
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    border-radius: 10px;
  }
`;

const BackdropContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
