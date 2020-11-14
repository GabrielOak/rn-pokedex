import React, { useEffect, useState, memo } from 'react';
import { FlatList, View, TouchableHighlight, StatusBar } from 'react-native';

import Card from '../components/card/Card';

import api from '../services/api';

const PokemonScreen = ({ navigation }) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api.get().then((resp) => {
      setPokemons(resp.data.pokemon);
    });

    const statusBarColor = navigation.addListener('focus', () => {
      StatusBar.setBackgroundColor('white', true);
      StatusBar.setBarStyle('dark-content', true);

      return statusBarColor;
    });

  }, []);

  const _onPress = (pokemon) => {
    navigation.navigate('Detail', { pokemon })
  }

  return (
    <View>
      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between', }}
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.id.toString()}
        numColumns={2}
        renderItem={({ item: pokemon }) => (
          <TouchableHighlight
            style={{ flex: 1 / 2 }}
            onPress={() => _onPress(pokemon)}
          >
            <Card
              name={pokemon.name}
              image={pokemon.img}
              types={pokemon.type}
            />
          </TouchableHighlight>
        )}
      />
    </View>
  );
};

export default memo(PokemonScreen);
