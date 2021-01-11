import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {IMAGES_URL} from '@constants';
import {styles} from './style';
import {Movie} from '@types';

export type MovieItemProps = {
  movie: Movie;
  onPress: Function;
};
export const MovieItem: React.FC<MovieItemProps> = ({movie, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FastImage
        style={styles.poster}
        source={{
          uri: IMAGES_URL + movie.poster_path,
        }}
      />
      <View style={styles.contentPanel}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text>{movie.release_date}</Text>
        <Text numberOfLines={3}>{movie.overview}</Text>
      </View>
    </TouchableOpacity>
  );
};
