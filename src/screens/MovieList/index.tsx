import React, {useEffect, useState, useContext} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {HomeStackNavProps} from '@navigation';
import {MovieContext} from '@context';
import {MovieItem, Spinner} from '@components';
import SearchBar from 'react-native-search-component';
import {styles} from './style';

export const MovieList: React.FC<HomeStackNavProps<'MovieList'>> = ({
  navigation,
}) => {
  const {state, searchMovie} = useContext(MovieContext);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    searchMovie(query, page);
  }, [query, page, refreshing]);

  useEffect(() => {
    if (!state.isLoading) {
      setRefreshing(false);
    }
  }, [state.isLoading]);

  const onChange = (e) => {
    setPage(1);
    setQuery(e?.nativeEvent?.text);
  };

  const onSearchClear = () => {};

  const handleLoadMore = () => {
    setPage((page) => page + 1);
  };

  const handleRefresh = () => {
    setPage(1);
    setRefreshing(true);
  };

  const listFooter = () => {
    if (!state.isLoadingMore) {
      return null;
    }
    return <Spinner />;
  };

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
            key={String(item.id)}
            movie={item}
            onPress={() => navigation.navigate('MovieDetail', {movie: item})}
          />
        )}
        onRefresh={handleRefresh}
        refreshing={refreshing}
        ListFooterComponent={listFooter}
        onEndReachedThreshold={0.5}
        onEndReached={handleLoadMore}
      />
    </SafeAreaView>
  );
};
