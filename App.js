import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LoadingPageApp from './src/screens/loadingPageApp';
import ScreenLoginCandidate from './src/screens/auth/login/candidat';
import ScreenLoginRecruiter from './src/screens/auth/login/recruteur';
import ScreenRegisterChoiceProfil from './src/screens/auth/register';
import FooterBar from './src/components/general/FooterBar';
import ScreenCreateProfilCandidate from './src/screens/auth/register/candidat/ScreenCreateProfilCandidate';
import generalStylesApp from './src/styles/generalStylesApp';
import ScreenRegisterCandidate from './src/screens/auth/register/candidat/ScreenRegisterCandidate';
import ScreenRegisterRecruiter from './src/screens/auth/register/recruteur/ScreenRegisterRecruiter';
import FormCreateProfilRecruiter from './src/components/general/FormCreateProfilRecruiter';
import ScreenCreateProfilRecruiter from './src/screens/auth/register/recruteur/ScreenCreateProfilRecruiter';
import ScreenProfileCandidate from './src/screens/candidate/ScreenProfileCandidate';
import ScreenEditProfilCandidate from './src/screens/candidate/ScreenProfileCandidate/ScreenEditProfilCandidate';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <LoadingPageApp /> */}
      {/* <ScreenLoginCandidate /> */}
      {/* <ScreenLoginRecruiter /> */}
      {/* <ScreenRegisterChoiceProfil /> */}
      {/* <ScreenCreateProfilCandidate /> */}
      {/* <ScreenRegisterCandidate /> */}
      {/* <ScreenRegisterRecruiter /> */}
      {/* <ScreenCreateProfilRecruiter /> */}
      {/* <ScreenProfileCandidate /> */}
      <ScreenEditProfilCandidate />
      {/* <FooterBar /> */}
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
