import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCommentDots } from "react-icons/fa";
import { IoIosSend, IoMdShare } from "react-icons/io";

import styled from "styled-components";
import { Comments } from "../../../types/types";
import CommentsDrawer from "./CommentsDrawer";
import HeartIcon from "./HeartIcon";

type BottomNavProps = {
  profilePic: string;
  username: string;
  caption: string;
  comments: Comments[];
};

const BottomNav = ({
  profilePic,
  username,
  caption,
  comments,
}: BottomNavProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        <HeartIcon size={40} stroke="#fff" />
        <FaCommentDots size={40} color="white" onClick={handleOpen} />
        <IoMdShare size={40} color="white" />
        <IoIosSend size={40} color="white" />
        <BsThreeDotsVertical size={40} color="white" />
      </StyledRightBar>
      <CommentsDrawer
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        comments={comments}
      />
    </>
  );
};

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
  width: 90%;

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
