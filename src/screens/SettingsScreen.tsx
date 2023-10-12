import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { useAuth } from '../context';

export const SettingsScreen = () => {
  // HOOKS
  const { isAuthenticated, login, logout } = useAuth();

  // RENDERS
  return (
    <View style={styles.container}>
      <Text style={styles.greetingMessage}>
        {isAuthenticated ? 'Welcome back' : 'Login for more cool stuff!'}
      </Text>
      <Button
        title={isAuthenticated ? 'Logout' : 'Login'}
        onPress={isAuthenticated ? logout : login}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetingMessage: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
