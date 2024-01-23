import styled from "styled-components";
import { fakeVideos } from "../../fakeData/fakedata";
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
  return (
    <>
      <MainContainer>
        {data.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
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
