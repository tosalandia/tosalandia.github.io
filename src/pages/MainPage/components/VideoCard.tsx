import { useRef } from "react";
import styled from "styled-components";
import { VideoType } from "..";
import BottomNav from "./BottomNav";

type VideoCardProps = {
  video: VideoType;
};

const VideoCard = ({ video }: VideoCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <VideoContainer>
      <Container ref={ref}>
        <StyledVideo autoPlay loop>
          <source src={video.src} type="video/mp4" />
        </StyledVideo>
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

const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

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
