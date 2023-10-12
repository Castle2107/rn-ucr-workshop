import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet } from 'react-native';
import { RootStackNavigator } from './src/navigators';
import { AuthProvider } from './src/context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <AuthProvider>
          <RootStackNavigator />
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
