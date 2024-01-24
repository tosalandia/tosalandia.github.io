import { useState } from "react";
import { LuHeart } from "react-icons/lu";
import styled from "styled-components";

type HeartIconProps = {
  size: number;
  stroke: string;
};

const HeartIcon = ({ size, stroke }: HeartIconProps) => {
  const [hearted, setHearted] = useState(false);
  const handleLike = () => {
    setHearted(!hearted);
  };

  return (
    <StyledHeart
      size={size}
      $hearted={hearted}
      $stroke={stroke}
      onClick={handleLike}
      fill={hearted ? "red" : "transparent"}
    />
  );
};

const StyledHeart = styled(LuHeart)<{ $hearted?: boolean; $stroke?: string }>`
  color: ${(props) => (props.$hearted ? "red" : "white")};
  stroke: ${(props) => (props.$hearted ? "red" : props.$stroke)};
  transform: ${(props) => props.$hearted && "scale(1.2)"};
  transition: color 0.25s ease-in-out, transform 0.25s ease, stroke 0.25s ease;
`;

export default HeartIcon;
