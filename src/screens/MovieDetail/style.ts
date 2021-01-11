import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  container: {
    padding: normalize(15),
  },
  poster: {
    height: normalize(400),
  },
  overview: {
    fontSize: normalize(20),
    color: 'grey',
  },
  date: {
    fontSize: normalize(16),
    color: 'blue',
  },
});
