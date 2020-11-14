import React from 'react';
import { View, Text, StatusBar, Image, StyleSheet } from 'react-native';
import colorType from '../components/colorType';
import imagesType from '../components/ImageType';

const PokemonDetail = ({ route, navigation }) => {

  const { pokemon } = route.params;

  React.useLayoutEffect(() => {

    StatusBar.setBackgroundColor(colorType[pokemon.type[0]], true);
    StatusBar.setBarStyle('light-content', true);

    navigation.setOptions({
      title: '',
      headerStyle: {
        backgroundColor: colorType[pokemon.type[0]]
      },
      headerTintColor: 'white',
    });


  }, [navigation, pokemon.name])

  return (
    <View style={{ backgroundColor: colorType[pokemon.type[0]], flex: 1 }}>
      <View style={styleDetail.header}>
        <Text style={styleDetail.name}>{pokemon.name}</Text>
        <Text style={styleDetail.name}>#{pokemon.id}</Text>
      </View>
      <View style={styleDetail.typeContainer}>
        {pokemon.type.map((type, index) => {
          return (
            <Image
              key={index}
              style={{ width: 50, height: 50, marginLeft: 10, resizeMode: 'contain' }}
              source={imagesType[type]}
            />
          );
        })}
      </View>

      <View style={styleDetail.container}>
        <Image style={styleDetail.image} source={{ uri: pokemon.img }} />
      </View>
      <View style={styleDetail.info}>

      </View>

    </View>);
}


const styleDetail = StyleSheet.create({

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  name: {
    color: 'white',
    fontSize: 25,
    marginLeft: 20,
    margin: 10,
    fontWeight: 'bold'
  },

  typeContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },

  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 150,
    height: 150,
    marginTop: -40,
    marginLeft: 15,
    zIndex: 1
  },

  info: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 50,
    marginHorizontal: 15,
    marginBottom: 10,
    marginTop: -30,
    backgroundColor: '#f1eff0',
  }


});

export default PokemonDetail;