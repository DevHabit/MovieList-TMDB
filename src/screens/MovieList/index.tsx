import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {HomeStackNavProps} from '@navigation';
import {MovieContext} from '@context';
import {MovieItem} from '@components';
import SearchBar from 'react-native-search-component';
import {styles} from './style';

export const MovieList: React.FC<HomeStackNavProps<'MovieList'>> = ({
  navigation,
}) => {
  const {state, searchMovie} = useContext(MovieContext);
  const [movieList, setMovieList] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    searchMovie(query, page);
  }, [query, page]);

  const onChange = (e) => {
    setQuery(e?.nativeEvent?.text);
  };

  const onSearchClear = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        value={query}
        theme="LIGHT"
        onChange={onChange}
        onSearchClear={onSearchClear}
        isLoading={state.isLoading}
      />
      <FlatList
        data={state.movieList}
        renderItem={({item}) => (
          <MovieItem
            key={item.id}
            movie={item}
            onPress={() => navigation.navigate('MovieDetail', {id: item.id})}
          />
        )}
      />
    </SafeAreaView>
  );
};
