import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

export const Spinner: React.FC = ({}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#FA6603" />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    margin: 'auto',
  },
});
