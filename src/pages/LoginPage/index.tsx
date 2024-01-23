import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { initialVideoSrc } from "../../fakeData/fakedata";

const credentials = {
  username: "",
  password: "",
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<{
    username: string;
    password: string;
  }>({ username: "", password: "" });
  const [hint, setHint] = useState<string>("");

  const handleLogin = () => {
    if (
      user?.username === credentials.username &&
      user?.password === credentials.password
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
      <StyledVideo autoPlay loop muted>
        <source src={initialVideoSrc} type="video/mp4" />
      </StyledVideo>
      <StyledFront>
        <StyledBox>
          <StyledTextField
            placeholder="Username"
            variant="outlined"
            onChange={(e) => {
              setUser({ ...user, username: e.target.value });
            }}
            fullWidth
          />
          <StyledTextField
            placeholder="Password"
            variant="outlined"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
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

const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledContainer = styled.div`
  position: relative;
  height: 100vh;
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
  height: 100vh;
  width: 100vw;
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
