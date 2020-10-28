import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PokemonScreen from './views/PokemonScreen';
import PokemonDetail from './views/PokemonDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f1eff0" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Pokemons" component={PokemonScreen} />
          <Stack.Screen name="Detail" component={PokemonDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
