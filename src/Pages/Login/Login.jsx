import React, { useState } from "react";
import styled from "styled-components";

const LogInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
  color: black;
`;

const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: black;
  border-radius: 8px;
`;

const LogInInput = styled.input`
  padding: 10px;
  border-radius: 4px;
`;

const LogInButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: darkblue;
  color: white;
  cursor: pointer;
`;

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para autenticar al usuario
  };

  return (
    <LogInContainer>
      <LogInForm onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <LogInInput
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <LogInInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <LogInButton type="submit">Log In</LogInButton>
      </LogInForm>
    </LogInContainer>
  );
};

export default LogIn;
