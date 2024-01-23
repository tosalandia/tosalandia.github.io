import { SwipeableDrawer } from "@mui/material";
import { LuHeart } from "react-icons/lu";
import styled from "styled-components";

type CommentsDrawerProps = {
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  comments: {
    username: string;
    comment: string;
    date: string;
    likes: number;
  }[];
};

const CommentsDrawer = ({
  open,
  handleClose,
  handleOpen,
  comments,
}: CommentsDrawerProps) => {
  return (
    <StyledSwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
    >
      <StyledTitle>Comentarios</StyledTitle>
      <div
        style={{
          maxHeight: "80vh",
        }}
      >
        {comments.map((comment, index) => (
          <StyledCommentBox key={index}>
            <div
              style={{
                flex: 1,
              }}
            >
              <StyledUsername>{comment.username}</StyledUsername>
              <StyledDate>{comment.date}</StyledDate>
              <StyledComment>{comment.comment}</StyledComment>
            </div>
            <StyledLikes>
              <LuHeart size={20} />
              <span style={{ fontSize: 17 }}>{comment.likes}</span>
            </StyledLikes>
          </StyledCommentBox>
        ))}
      </div>
    </StyledSwipeableDrawer>
  );
};

const StyledSwipeableDrawer = styled(SwipeableDrawer)`
  .MuiDrawer-paper {
    width: 98%;
    margin: 0 auto;
    background-color: #fff;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
`;

const StyledTitle = styled.h1`
  font-size: 17px;
  font-weight: bold;
  color: #333;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  background-color: #fff;
`;

const StyledCommentBox = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
  display: flex;
`;

const StyledUsername = styled.span`
  font-weight: bold;
  color: #333;
`;
const StyledDate = styled.span`
  color: #aaa;
  font-weight: bold;
  font-size: 12px;
  margin-left: 10px;
`;

const StyledComment = styled.p`
  color: #333;
`;

const StyledLikes = styled.div`
  margin-top: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2;
`;

export default CommentsDrawer;
