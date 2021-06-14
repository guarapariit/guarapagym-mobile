import React from 'react';
// import { Image } from 'react-native';

import { Container, Description, Highlight, Header, LoginButton, LoginButtonContainer } from './styles';

// TODO: FIX LOGO IMAGE
// import LogoOrange from '../../assets/guarapagym_logo_orange.png'

const Preload: React.FC = () => {
  return (
    <Container>
      <Header>
        {/* <Image 
          source={{ uri: LogoOrange }}
          style={{
            width: 40,
            height: 40
          }}
        /> */}
        <Description>{`Eleve suas \nhabilidades para o próximo nível com a`} <Highlight>Guarapagym</Highlight></Description>
      </Header>

      <LoginButtonContainer 
        onPress={() => {}}
        accessibilityLabel="Entrar"
      >
        <LoginButton>Entrar</LoginButton>
      </LoginButtonContainer>
    </Container>
  );
};

export default Preload;
