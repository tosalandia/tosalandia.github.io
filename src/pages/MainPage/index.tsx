import { useRef } from "react";
import styled from "styled-components";
import { fakeMixed } from "../../fakeData/fakedata";
import { TikToks } from "../../types/types";
import CardCard from "./components/CardCard";
import LastCard from "./components/LastCard";
import VideoCard from "./components/VideoCard";

const data = fakeMixed;

const MainPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  const reset = () => {
    controlarVideos();
    ref.current?.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const controlarVideos = () => {
    // Paso 1: Seleccionar todos los elementos <video>
    const videos = document.getElementsByTagName("video");

    // Paso 2: Iterar sobre los videos para pausar o detener la reproducción
    for (let i = 0; i < videos.length; i++) {
      // Pausar o detener el video
      videos[i].pause(); // puedes cambiarlo a videos[i].stop() si quieres detener la reproducción completamente
      console.log(videos[i]);
    }

    // Paso 3: Seleccionar el primer vídeo de la lista y reproducirlo
    if (videos.length > 0) {
      videos[0].play();
    }
  };

  return (
    <MainContainer ref={ref}>
      {data.map((video, index) => (
        <TikTokRenderer key={index} tiktok={video} />
      ))}
      <LastCard goBack={reset} />
    </MainContainer>
  );
};

type TikTokRendererProps = {
  tiktok: TikToks;
};
const TikTokRenderer = ({ tiktok }: TikTokRendererProps) => {
  switch (tiktok.type) {
    case "video":
      return <VideoCard video={tiktok} />;
    case "cards":
      return <CardCard card={tiktok} />;
  }
};

const MainContainer = styled.div`
  height: 100dvh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

export default MainPage;
