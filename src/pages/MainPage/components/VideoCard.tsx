import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { VideoType } from "../../../types/types";
import useIsInViewPort from "../../../utils/isInViewPort";
import BottomNav from "./BottomNav";

type VideoCardProps = {
  video: VideoType;
};

const VideoCard = ({ video }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const isInViewport = useIsInViewPort({ ref: spanRef });
  const [isPlaying, setIsPlaying] = useState(false);

  const cld = new Cloudinary({ cloud: { cloudName: "dfpalvvqh" } });
  const videoUrl = cld.video(video.videosrc);

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
        {/* <StyledVideo ref={videoRef} loop autoPlay={isInViewport}>
          <source src={videoUrl} type="video/mp4" />
        </StyledVideo> */}
        <StyledVideo cldVid={videoUrl} autoPlay={isInViewport} loop />
        <CenteredSpan ref={spanRef}>{0}</CenteredSpan>
        <BottomNav
          profilePic={video.profilePic}
          username={video.username}
          caption={video.caption}
          comments={video.comments}
        />
      </Container>
    </VideoContainer>
  );
};

export default VideoCard;

const StyledVideo = styled(AdvancedVideo)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
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
`;

const CenteredSpan = styled.span`
  color: transparent;
  font-size: 5rem;
  font-weight: 700;
  z-index: 1;
`;
