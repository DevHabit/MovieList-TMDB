import {StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: normalize(10),
  },
  poster: {
    width: normalize(150),
    height: normalize(150),
    borderRadius: 10,
    backgroundColor: 'grey',
  },
  contentPanel: {
    marginLeft: normalize(10),
    marginVertical: normalize(15),
    flex: 1,
  },
  title: {
    fontSize: normalize(20),
    flex: 1,
  },
});
