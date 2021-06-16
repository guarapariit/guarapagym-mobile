import React, { useRef } from 'react';
import { Text, View, Button, DrawerLayoutAndroid, TouchableOpacity, Image, TextInput } from 'react-native'
import { hamburguerIcon, logoBlack } from '../../assets';
import { SideBar } from '../../components/sidebar';
import { Colors } from '../../utils/ColorsEnum';

import {
  Container,
  Header,
} from './styles';

const Profile: React.FC = () => {
	const avatarUrl = 'https://i.pinimg.com/474x/33/4d/42/334d425ebe7b8134d7c83170522b7816.jpg'
  const drawer = useRef(null);
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={250}
      drawerPosition={'left'}
      renderNavigationView={SideBar}
      style={{marginTop: 0}}
    >
      <Container>
        <Header
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <TouchableOpacity
            onPress={() => (drawer as any).current.openDrawer()}
          >
            <Image
              source={{ uri: hamburguerIcon }}
              style={{width:50, height:50, marginTop:30}}
            />
          </TouchableOpacity>
          <Image
            source={{ uri: logoBlack }}
            style={{width:120, height:50, marginTop:30}}
          />
        </Header>
        <View>
					<TouchableOpacity>
						<Image
							source={{ uri: avatarUrl }}
							style={{
								marginTop: 50,
								marginLeft: 20,
								width: 100,
								height: 100,
								borderRadius: 100
							}}
						/>
						<Text
							style={{
								marginLeft: 20,
								color: Colors.BROWN
							}}
						>Trocar imagem</Text>
					</TouchableOpacity>
					<View
						style={{
							marginTop: 70
						}}
					>
						<Text
							style={{
								marginLeft: 20,
								color: Colors.BROWN,
								fontSize: 18,
								fontWeight: '500'
							}}
						>
							Trocar senha:
						</Text>
						<View>
							<Text
								style={{
									marginTop: 20,
									marginLeft: 20,
									color: Colors.BROWN
								}}
							>
								Senha atual
							</Text>
							<TextInput
								style={{
									backgroundColor: Colors.WHITE,
									borderBottomWidth: 2,		
									borderBottomColor: Colors.BLACK,
									borderRightColor: Colors.BLACK,
									borderRightWidth: 1,
									borderRadius: 5,
									width: 350,
									borderColor: Colors.BLACK,
									borderWidth: .3,
									alignSelf: 'center',
									margin: 10
								}}
							></TextInput>
						</View>
						<View>
							<Text
								style={{
									marginTop: 20,
									marginLeft: 20,
									color: Colors.BROWN
								}}
							>
								Nova senha
							</Text>
							<TextInput
								style={{
									backgroundColor: Colors.WHITE,
									borderBottomWidth: 2,		
									borderBottomColor: Colors.BLACK,
									borderRightColor: Colors.BLACK,
									borderRightWidth: 1,
									borderRadius: 5,
									width: 350,
									borderColor: Colors.BLACK,
									borderWidth: .3,
									alignSelf: 'center',
									margin: 10
								}}
							></TextInput>
							</View>
							<View>
								<Text
								style={{
									marginTop: 20,
									marginLeft: 20,
									color: Colors.BROWN
								}}
							>
								Repetir senha
							</Text>
							<TextInput
								style={{
									backgroundColor: Colors.WHITE,
									borderBottomWidth: 2,		
									borderBottomColor: Colors.BLACK,
									borderRightColor: Colors.BLACK,
									borderRightWidth: 1,
									borderRadius: 5,
									width: 350,
									borderColor: Colors.BLACK,
									borderWidth: .3,
									alignSelf: 'center',
									margin: 10
								}}
							></TextInput>
						</View>
						<TouchableOpacity
							onPress={() => {}}
							style={{
								borderRadius: 5,
								backgroundColor: Colors.BROWN,
								width: 350,
								alignSelf: 'center'
							}}
						>
							<Text
								style={{
									textAlign: 'center',
									paddingVertical: 14,
									color: Colors.WHITE,
									fontSize: 20
								}}
							>
								Salvar
							</Text>
						</TouchableOpacity>
					</View>
				</View>
      </Container>
    </DrawerLayoutAndroid>
  );
}

export default Profile;
