import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../pages/Preload';
import { Colors } from '../utils/ColorsEnum';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Login from '../pages/Login';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: Colors.SALMON },
    }}
  >
    <App.Screen name="Preload" component={Preload} />
    <App.Screen name="Login" component={Login} />
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Profile" component={Profile} />
  </App.Navigator>
);

export default AppRoutes;
