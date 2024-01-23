import { useRef } from "react";
import styled from "styled-components";
import { fakeVideos } from "../../fakeData/fakedata";
import LastCard from "./components/LastCard";
import VideoCard from "./components/VideoCard";

export type VideoType = {
  index: number;
  src: string;
  profilePic: string;
  caption: string;
  username: string;
  comments: {
    username: string;
    comment: string;
    date: string;
    likes: number;
  }[];
};

const data = fakeVideos;

const MainPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  const reset = () => {
    console.log("top");
    ref.current?.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <MainContainer ref={ref}>
        {data.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
        <LastCard goBack={reset} />
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

export default MainPage;
