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
import ScreenPaginationPart1 from './src/screens/candidate/ScreenProfileCandidate/ScreenEditProfileCandidate/ScreenPaginationPart1';
import ScreenPaginationPart2 from './src/screens/candidate/ScreenProfileCandidate/ScreenEditProfileCandidate/ScreenPaginationPart2';
import ScreenPaginationPart3 from './src/screens/candidate/ScreenProfileCandidate/ScreenEditProfileCandidate/ScreenPaginationPart3';
import ScreenMessageEditProfileCandidate from './src/screens/candidate/messages/success/ScreenMessageEditProfileCandidate';
import ScreenMessageChangepasswordscandidate from './src/screens/candidate/messages/success/ScreenMessageChangepasswordscandidate';
import ScreenMessageCreateProfileCandidate from './src/screens/candidate/messages/success/ScreenMessageCreateProfileCandidate';
import ScreenMessageSendMailChangingMdpCandidate from './src/screens/candidate/messages/success/ScreenMessageSendMailChangingMdpCandidate';
import ScreenMessageLogoutAccountProfileCandidate from './src/screens/candidate/messages/success/ScreenMessageLogoutAccountProfileCandidate';
import ScreenAboutCandidate from './src/screens/candidate/ScreenAboutCandidate';


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
      {/* <ScreenPaginationPart1 /> */}
      {/* <ScreenPaginationPart2 /> */}
      {/* <ScreenPaginationPart3 /> */}
      {/* <ScreenMessageEditProfileCandidate /> */}
      {/* <ScreenMessageChangepasswordscandidate /> */}
      {/* <ScreenMessageCreateProfileCandidate /> */}
      {/* <ScreenMessageSendMailChangingMdpCandidate /> */}
      {/* <ScreenMessageLogoutAccountProfileCandidate /> */}
      <ScreenAboutCandidate />
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
