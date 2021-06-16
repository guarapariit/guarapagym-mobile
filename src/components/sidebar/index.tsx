import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { logoutIcon, settingsItem } from '../../assets';
import { Colors } from '../../utils/ColorsEnum';
import { Container } from './styles';

export const SideBar = () => {
  const avatarUrl = 'https://i.pinimg.com/474x/33/4d/42/334d425ebe7b8134d7c83170522b7816.jpg'
  return (
    <Container>
      <View
        style={{
          height: 300,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Image
          source={{ uri: avatarUrl }}
          style={{
            marginTop: 100,
            marginLeft: 20,
            width: 100,
            height: 100,
            borderRadius: 100
          }}
        />
        <Text
          style={{
            transform: [{rotate: '270deg'}],
            alignSelf: 'center',
            marginRight: -30,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 24,
          }}
        >João Frango</Text>
      </View>
      <View
        style={{
          height: 100,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}
      >
        <TouchableOpacity>
          <Image          
            source={{ uri: settingsItem }}
            style={{
              width: 40,
              height: 40,
            }}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',                        
          }}
        >
          <Text
            style={{
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: 25,
              color: Colors.BROWN
            }}
          >Logout</Text>
          <Image 
            source={{ uri: logoutIcon }}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </TouchableOpacity>
      </View>
    </Container>
  );
}
