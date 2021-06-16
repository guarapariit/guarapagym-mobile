import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, Image, Alert } from 'react-native'
import { logoBlack } from '../../assets';
import api from '../../services/api';
import { Colors } from '../../utils/ColorsEnum';

import { Container, Header, LoginButton, LoginButtonContainer, Form, Input, InputContainer } from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigation = useNavigation();

  async function handleNavigate(): Promise<void> {
    navigation.navigate('Home', {
      screen: 'Home',
    });
  }

  function handleEmailChange(email: string) {
    setEmail(email);
  }

  function handlePasswordChange(password: string) {
    setPassword(password);
  }

  async function signIn() {
    const data = {
      email, 
      password
    }
    try {
      const request = await api.post('https://guarapagym.herokuapp.com/sessions', data)
      console.log(request)
      return !!request.data.token && request.data.token !== ''
    } catch (err) {
      Alert.alert('Erro ao logar, tente novamente mais tarde.');
    }
  }

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
            value={email}
            autoCorrect={false}
            onChangeText={e => handleEmailChange(e)}
          />
          <Input
            accessibilityLabel='Senha'
            placeholder='Senha'
            placeholderTextColor={Colors.BLACK}
            value={password}
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={e => handlePasswordChange(e)}
          />
        </InputContainer>
      </Form>
      <LoginButtonContainer
        onPress={() => {
          !!signIn() ? handleNavigate() : Alert.alert('Verifique seu email/senha')
        }}
        accessibilityLabel="Entrar"
      >
        <LoginButton>Entrar</LoginButton>
      </LoginButtonContainer>
    </Container>
  );
};

export default Login;
