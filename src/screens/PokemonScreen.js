import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Card from '../components/Card';

import api from '../services/api';

const PokemonScreen = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api.get().then((resp) => {
      setPokemons(resp.data.pokemon);
    });
  }, []);

  return (
    <View>
      <FlatList
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.id.toString()}
        numColumns={2}
        renderItem={({ item: pokemon }) => (
          <Card
            name={pokemon.name}
            image={pokemon.img}
            types={pokemon.type}
          />
        )}
      />
    </View>
  );
};

export default PokemonScreen;
