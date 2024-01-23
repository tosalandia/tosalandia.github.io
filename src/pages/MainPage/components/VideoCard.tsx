import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { VideoType } from "..";
import useIsInViewPort from "../../../utils/isInViewPort";
import BottomNav from "./BottomNav";

type VideoCardProps = {
  video: VideoType;
  index: number;
};

const VideoCard = ({ video, index }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const isInViewport = useIsInViewPort({ ref: spanRef });
  const [isPlaying, setIsPlaying] = useState(false);

  const pause = useCallback(async () => {
    if (!isPlaying || !videoRef) return;
    await videoRef.current?.pause();
    setIsPlaying(false);
  }, [isPlaying]);

  const play = useCallback(async () => {
    if (isPlaying || !videoRef) return;
    await videoRef.current?.play();
    setIsPlaying(true);
  }, [isPlaying]);

  useEffect(() => {
    if (isInViewport) {
      play();
    } else {
      pause();
    }
  }, [isInViewport, pause, play]);

  return (
    <VideoContainer>
      <Container>
        <StyledVideo ref={videoRef} loop autoPlay={isInViewport}>
          <source src={video.src} type="video/mp4" />
        </StyledVideo>
        <CenteredSpan ref={spanRef}>{index}</CenteredSpan>
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
  object-fit: contain;
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

const CenteredSpan = styled.span`
  color: transparent;
  font-size: 5rem;
  font-weight: 700;
  z-index: 1;
`;
