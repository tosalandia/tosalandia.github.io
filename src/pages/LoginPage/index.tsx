import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { Button, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { initialVideoSrc } from "../../fakeData/fakedata";

const credentials = {
  username: "tosa",
  password: "16/08/2018",
};

const LoginPage = () => {
  const navigate = useNavigate();
  const cld = new Cloudinary({ cloud: { cloudName: "dfpalvvqh" } });
  const videoUrl = cld.video(initialVideoSrc);
  const userRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [hint, setHint] = useState<string>("");

  const handleLogin = () => {
    if (
      userRef.current?.value.toLowerCase() === credentials.username &&
      passwordRef.current?.value.toLowerCase() === credentials.password
    ) {
      navigate("/main");
    } else {
      setHint(
        "El usuario es tu nombre. La contraseña es la fecha de nuestro aniversario (dd/mm/aaaa)"
      );
    }
  };

  return (
    <StyledContainer>
      <StyledVideo cldVid={videoUrl} autoPlay loop muted />
      <StyledFront>
        <StyledBox>
          <StyledTextField
            inputRef={userRef}
            placeholder="Username"
            variant="outlined"
            fullWidth
          />
          <StyledTextField
            inputRef={passwordRef}
            placeholder="Password"
            variant="outlined"
            fullWidth
          />

          {hint && <StyledP>{hint}</StyledP>}

          <StyledButton
            variant="contained"
            color="primary"
            onClick={handleLogin}
            fullWidth
          >
            Login
          </StyledButton>
        </StyledBox>
      </StyledFront>
    </StyledContainer>
  );
};

const StyledButton = styled(Button)``;

const StyledTextField = styled(TextField)`
  margin: 10px;
  background: #fafbfd;
  border-radius: 10px;
  & .MuiOutlinedInput-root {
    border-radius: 10px;
  }
`;

const StyledVideo = styled(AdvancedVideo)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledContainer = styled.div`
  position: relative;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
`;

const StyledFront = styled.div`
  z-index: 1;
  width: inherit;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100dvw;
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #cacaca;
  padding: 20px;
  border-radius: 10px;
  width: 250px;
`;

const StyledP = styled.span`
  color: red;
  font-weight: bold;
  font-size: 15px;
  padding: 0px 15px;
`;

export default LoginPage;
