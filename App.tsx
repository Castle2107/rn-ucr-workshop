import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet} from 'react-native';
import {RootStackNavigator} from './src/navigators';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
