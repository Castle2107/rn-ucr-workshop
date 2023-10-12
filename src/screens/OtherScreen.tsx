import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export const OtherScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Text>Hey</Text>
      </View>
      <View
        style={{
          flex: 1,
          //   width: '100%',
          alignSelf: 'stretch',
          //   flexDirection: 'row',
          //   justifyContent: 'center',
          //   alignItems: 'center',
          backgroundColor: 'red',
        }}>
        <Text>Hey</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
