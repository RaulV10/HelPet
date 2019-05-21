import React from "react";
import { Button, Form } from "react-native";
import styled from "styled-components";
import firebase from "./components/Firebase";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Logo source={require("./assets/text/logo.png")} />
        <Label>Iniciar Sesión</Label>
        <Form>
          <TextInput placeholder="Correo" />
          <TextInput placeholder="Contraseña" />

          <BigButton>
            <Text>Hola</Text>
          </BigButton>
        </Form>
        <BlackText>¿No tienes una cuenta?</BlackText>
        <Button color="#B95482" title="Registrate" />
      </Container>
    );
  }
}

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  margin-left: 20px;
  position: absolute;
  top: 20%;
  left: 108;
`;

const Label = styled.Text`
  margin-top: 50%;
  color: #b95482;
  font-size: 18;
  font-weight: bold;
  margin-left: -50%;
`;

const TextInput = styled.TextInput`
  background-color: #e9e9e9;
  margin-top: 5%;
  width: 80%;
  height: 45px;
  text-align: center;
`;

const Text = styled.Text`
  color: white;
`;

const BlackText = styled.Text`
  color: black;
`;

const BigButton = styled.TouchableOpacity`
  margin-top: 10%;
  background-color: #b95482;
  width: 80%;
  height: 45px;
`;
