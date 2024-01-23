import { useEffect, useRef } from "react";
import styled from "styled-components";
import { VideoType } from "..";
import BottomNav from "./BottomNav";

type VideoCardProps = {
  video: VideoType;
};

const VideoCard = ({ video }: VideoCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  //const isInViewPort = useIsInViewPort({ ref: ref });

  useEffect(
    () => {
      /* if (isInViewPort) {
      //getVideos(index + 1);
      handleNext();
    } */
    },
    [
      /* getVideos */
      /* index, isInViewPort, handleNext */
    ]
  );

  return (
    <VideoContainer>
      <Container ref={ref}>
        <video autoPlay loop height={"100%"} width={"100%"}>
          <source src={video.src} type="video/mp4" />
        </video>
        <BottomNav
          profilePic={video.profilePic}
          username={video.username}
          caption={video.caption}
          video={video}
        />
      </Container>
    </VideoContainer>
  );
};

export default VideoCard;

const VideoContainer = styled.div`
  height: 100vh;
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
`;
