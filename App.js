import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LoadingPageApp from './src/screens/loadingPageApp';
import ScreenLoginCandidate from './src/screens/auth/login/candidat';
import ScreenLoginRecruiter from './src/screens/auth/login/recruteur';
import ScreenRegisterChoiceProfil from './src/screens/auth/register';
import FooterBar from './src/components/general/FooterBar';
import ScreenCreateProfilCandidate from './src/screens/auth/register/candidat/ScreenCreateProfilCandidate';
import generalStylesApp from './src/styles/generalStylesApp';
import ContainerDegree from './src/components/general/ContainerDegree';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <LoadingPageApp /> */}
      {/* <ScreenLoginCandidate /> */}
      {/* <ScreenLoginRecruiter /> */}
      {/* <ScreenRegisterChoiceProfil /> */}
      <ScreenCreateProfilCandidate />
      {/* <ContainerDegree /> */}
      <FooterBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: generalStylesApp.ColorFromApp.SECOND_COLOR,
  },
});
