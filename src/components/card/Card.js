import React, { memo } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';

import imagesType from '../ImageType';
import colorType from '../colorType';
import styleCard from './styleCard';

const Card = (props) => {

  return (
    <View style={styleCard.card} backgroundColor={colorType[props.types[0]]}>
      <View style={styleCard.titleContainer}>
        <Text style={styleCard.title}> {props.name} </Text>
      </View>
      <View style={styleCard.detailContainer}>
        <View style={styleCard.typeContainer}>
          {props.types.map((type, index) => {
            return <Image
              key={index}
              style={{ width: 50, height: 50, marginLeft: 10, resizeMode: 'contain' }}
              source={imagesType[type]} />
          })}
        </View>
        <View style={styleCard.imageContainer} >
          <Image style={styleCard.image} source={{ uri: props.image }} />
        </View>
      </View>
    </View>
  );
};

export default memo(Card);
