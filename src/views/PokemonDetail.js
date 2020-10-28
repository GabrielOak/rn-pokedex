import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import colorType from '../components/colorType';

const PokemonDetail = ({ route, navigation }) => {

  const { pokemon } = route.params;

  React.useLayoutEffect(() => {

    StatusBar.setBackgroundColor(colorType[pokemon.type[0]], true);
    StatusBar.setBarStyle('light-content', true);

    navigation.setOptions({
      title: pokemon.name,
      headerStyle: {
        backgroundColor: colorType[pokemon.type[0]]
      },
      headerTintColor: 'white',
    });


  }, [navigation, pokemon.name])

  return (
    <View style={{ backgroundColor: colorType[pokemon.type[0]], flex: 1 }}>
      <Text>{pokemon.id}</Text>
      <Text>{pokemon.name}</Text>
      {pokemon.type.map((type, index) => {
        return (
          <Text key={index} >{type}</Text>
        );
      })}
    </View>);
}

export default PokemonDetail;