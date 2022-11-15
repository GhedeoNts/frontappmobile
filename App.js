import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LoadingPageApp from './src/screens/loadingPageApp';
import ScreenLoginCandidate from './src/screens/auth/login/candidat';
import ScreenLoginRecruiter from './src/screens/auth/login/recruteur';
import ScreenRegisterChoiceProfil from './src/screens/auth/register';
import FooterBar from './src/components/general/FooterBar';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <LoadingPageApp /> */}
      <ScreenLoginCandidate />
      {/* <ScreenLoginRecruiter /> */}
      {/* <ScreenRegisterChoiceProfil /> */}

      <FooterBar />
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
