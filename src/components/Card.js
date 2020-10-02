import React, { memo } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import imagesType from './ImageType';

const Card = (props) => {

  return (
    <View style={styles.card} backgroundColor={colorType[props.types[0]]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> {props.name} </Text>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.typeContainer}>
          {props.types.map((type, index) => {
            return <Image
              key={index}
              style={{ width: 50, height: 50, marginLeft: 10, resizeMode: 'contain' }}
              source={imagesType[type]} />
          })}
        </View>
        <View style={styles.imageContainer} >
          <Image style={styles.image} source={{ uri: props.image }} />
        </View>
      </View>
    </View >
  );
};

const colorType = {
  Grass: '#51b6aa',
  Fire: '#e26768',
  Electric: '#f0c44b',
  Water: '#6890F0',
  Bug: '#A7DB8D',
  Normal: '#C6C6A7',
  Ice: '#94bcc7',
  Dragon: '#7038F8',
  Ground: '#E0C068',
  Fairy: '#EE99AC',
  Steel: '#B8B8D0',
  Psychic: '#A13959',
  Poison: '#A040A0',
  Fighting: '#EBD69D',
  Rock: '#927D44',
  Ghost: '#493963',
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    maxWidth: '50%',
    width: 180,
    height: 150,
    borderRadius: 6,
    backgroundColor: '#7159c1',
    elevation: 3,
    marginHorizontal: 4,
    marginVertical: 4,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowColor: '#333',
    shadowOffset: { width: 1, height: 1 },
  },
  titleContainer: {
    margin: 10,
    // backgroundColor: 'blue',
  },
  title: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: "bold",
  },
  detailContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  typeContainer: {
    // flex: 1,
    height: 100,
    width: 70,
    // backgroundColor: 'black',

  },
  imageContainer: {
    // backgroundColor: 'white',
    // borderRadius: 35,
    // opacity: 0.5,
    height: 100,
    width: 100,
  },
  image: {
    flex: 1,
  }
});

export default memo(Card);
