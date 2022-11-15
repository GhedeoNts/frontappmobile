import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ScreenLoginCandidate from './src/screens/auth/login/candidat';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoadingPageApp /> */}
      <ScreenLoginCandidate />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
});
