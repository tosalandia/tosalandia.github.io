import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
      <video autoPlay loop muted height={"100%"} width={"100%"}>
        <source
          src="https://media.istockphoto.com/id/1392123838/es/v%C3%ADdeo/alimentaci%C3%B3n-de-desplazamiento-manual-en-el-tel%C3%A9fono-inteligente-con-pantalla-verde-mock-up.mp4?s=mp4-640x640-is&k=20&c=SZIcYR4LoKZjrzBfNEGA3uAbtvj5CLx-uRKnMcYERxw="
          type="video/mp4"
        />
      </video>
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

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
`;

const StyledFront = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: inherit;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
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
