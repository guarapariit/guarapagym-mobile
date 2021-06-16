import React from 'react';
import { Text, Image } from 'react-native'
import { logoBlack } from '../../assets';
import { Colors } from '../../utils/ColorsEnum';

import { Container, Header, LoginButton, LoginButtonContainer, Form, Input, InputContainer } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Header>
        <Image
          source={{ uri: logoBlack }}
          style={{
            width: 250,
            height: 120,
            alignSelf: 'center',
            
          }}
        />
      </Header>
      <Form>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            lineHeight: 28,
            fontFamily: 'Roboto'
           }}
        >
          Fazer Login
        </Text>
        <InputContainer>
          <Input
            accessibilityLabel='Email'
            placeholder='Email'
            placeholderTextColor={Colors.BLACK}
          />
          <Input
            accessibilityLabel='Senha'
            placeholder='Senha'
            placeholderTextColor={Colors.BLACK}
            secureTextEntry={true}
          />
        </InputContainer>
      </Form>
      <LoginButtonContainer
        onPress={() => {}}
        accessibilityLabel="Entrar"
      >
        <LoginButton>Entrar</LoginButton>
      </LoginButtonContainer>
    </Container>
  );
};

export default Login;
