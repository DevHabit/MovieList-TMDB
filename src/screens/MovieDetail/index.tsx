import React, {useState, useCallback} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Title, List} from 'react-native-paper';
import {HomeStackNavProps} from '@navigation';
import {useFocusEffect} from '@react-navigation/native';
import {Movie} from '@types';
import FastImage from 'react-native-fast-image';
import {IMAGES_URL} from '@constants';
import {styles} from './style';
import {ScrollView} from 'react-native-gesture-handler';

export const MovieDetail: React.FC<HomeStackNavProps<'MovieDetail'>> = ({
  route,
}) => {
  const [movie, setMovie] = useState<Movie>();

  useFocusEffect(
    useCallback(() => {
      setMovie(route.params.movie);
    }, [route.params.movie.id]),
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <FastImage
          style={styles.poster}
          source={{uri: IMAGES_URL + movie?.poster_path}}
        />
        <View style={styles.container}>
          <Title>{movie?.title}</Title>
          <Text style={styles.overview}>{movie?.overview}</Text>
          <List.Item
            title="Release date"
            description={movie?.release_date}
            left={() => <List.Icon icon="calendar" />}
          />
          <List.Item
            title="Votes"
            description={String(movie?.vote_count)}
            left={() => <List.Icon icon="account" />}
          />
          <List.Item
            title="Avarage Rating"
            description={movie?.vote_average}
            left={() => <List.Icon icon="star" />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
