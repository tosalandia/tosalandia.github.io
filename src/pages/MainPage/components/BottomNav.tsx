import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCommentDots } from "react-icons/fa";
import { IoIosSend, IoMdShare } from "react-icons/io";
import { LuHeart } from "react-icons/lu";

import styled from "styled-components";
import { VideoType } from "..";
import CommentsDrawer from "./CommentsDrawer";

type BottomNavProps = {
  profilePic: string;
  username: string;
  caption: string;
  video: VideoType;
};

const BottomNav = ({
  profilePic,
  username,
  caption,
  video,
}: BottomNavProps) => {
  const [open, setOpen] = useState(false);
  const [hearted, setHearted] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLike = () => {
    setHearted(!hearted);
  };

  return (
    <>
      <StyledBottomNav>
        <ProfileSection
          profilePic={profilePic}
          username={username}
          caption={caption}
        />
      </StyledBottomNav>
      <StyledRightBar>
        <StyledHeart
          size={40}
          $hearted={hearted}
          onClick={handleLike}
          fill={hearted ? "red" : "transparent"}
        />
        <FaCommentDots size={40} color="white" onClick={handleOpen} />
        <IoMdShare size={40} color="white" />
        <IoIosSend size={40} color="white" />
        <BsThreeDotsVertical size={40} color="white" />
      </StyledRightBar>
      <CommentsDrawer
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        comments={video.comments}
      />
    </>
  );
};

const StyledHeart = styled(LuHeart)<{ $hearted?: boolean }>`
  color: ${(props) => (props.$hearted ? "red" : "white")};
  stroke: ${(props) => (props.$hearted ? "red" : "white")};
  transform: ${(props) => props.$hearted && "scale(1.2)"};
  transition: color 0.25s ease-in-out, transform 0.25s ease, stroke 0.1s ease;
`;

const StyledBottomNav = styled.div`
  position: absolute;
  bottom: 0%;
  left: 0%;
  margin-bottom: 15px;
  margin-left: 10px;
`;

const StyledRightBar = styled.div`
  position: absolute;
  right: 0%;
  bottom: 0%;
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  margin-bottom: 15px;
  gap: 20px;
`;

type ProfileSectionProps = {
  profilePic: string;
  username: string;
  caption: string;
};
const ProfileSection = ({
  profilePic,
  username,
  caption,
}: ProfileSectionProps) => {
  return (
    <StyledProfileSection>
      <div className="profile">
        <img src={profilePic} alt="profile" />
        <span className="span">{username}</span>
        <span className="seguir">Seguir</span>
      </div>
      <div className="caption">{caption}</div>
    </StyledProfileSection>
  );
};

const StyledProfileSection = styled.div`
  padding: 0px 10px;
  width: 95%;

  img {
    border-radius: 50%;
    width: 30px;
    aspect-ratio: 1/1;
  }

  .profile {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .span {
    font-weight: bold;
    color: white;
  }

  .seguir {
    color: #fff;
    font-weight: bold;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 2px 15px;
  }

  .caption {
    color: white;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default BottomNav;
