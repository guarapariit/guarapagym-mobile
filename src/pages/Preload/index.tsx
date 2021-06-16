import React from 'react';
import { logoOrange } from '../../assets';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Description, Highlight, Header, LoginButton, LoginButtonContainer } from './styles';

// TODO: FIX LOGO IMAGE
// import LogoOrange from '../../assets/guarapagym_logo_orange.png'

const Preload: React.FC = () => {
  const navigation = useNavigation();

  async function handleNavigate(): Promise<void> {
    navigation.navigate('Login', {
      screen: 'Login',
    });
  }

  return (
    <Container>
      <Header>
        <View>
          <Image 
            source={{ uri: logoOrange }}
            style={{
              width: 200,
              height: 100,
              marginTop: 100
            }}
          />
        </View>
        <View
          style={{
            width:300
          }}
        >
          <Description>{`Eleve suas \nhabilidades para o próximo nível com a`} <Highlight>Guarapagym</Highlight></Description>
        </View>
      </Header>

      <LoginButtonContainer
        onPress={() => handleNavigate()}
        accessibilityLabel="Entrar"
      >
        <LoginButton>Entrar</LoginButton>
      </LoginButtonContainer>
    </Container>
  );
};

export default Preload;
