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
    ref.current?.scroll({
      top: 0,
      behavior: "smooth",
    });
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
  height: ${window.innerHeight}px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

export default MainPage;
