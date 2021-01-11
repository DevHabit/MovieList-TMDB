import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {HomeStackNavProps} from '@navigation';

export const MovieList: React.FC<HomeStackNavProps<'MovieList'>> = ({}) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {}, []);

  return <View />;
};
