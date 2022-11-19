import { Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import styles from "./StyleProfilCandidate";
import NavBarApp from "../../../components/general/NavBarApp";
import HerosForApp from "../../../components/general/HerosForApp";
import StringAppFr from "../../../resources/strings/fr-FR";
import ImgForApp from "../../../resources/utils";
import SubTitleScreen from "../../../components/general/SubTitleScreen";
import ChoiceProfileCreation from "../../../components/general/ChoiceProfileCreation";
import FooterBar from "../../../components/general/FooterBar";

const ScreenProfileCandidate = () => {
  return (

    <SafeAreaView style={styles.container}>

      <ScrollView style={styles.scrollView}>

        <NavBarApp />
        <HerosForApp
          imgSource={ImgForApp.heros.imgHeroScreen}
        />
        <SubTitleScreen
          StyleViewSubTitle={styles.styleViewSubTitle}
          StyleSubTitle={styles.styleSubTitle}
          ContentSubTitle={StringAppFr.screenProfileCandidate.subTitle}
        />

        <View style={styles.containerChoiceActionProfilCandidate}>

          <View>
            <ChoiceProfileCreation
              StyleViewContainerImgChoiceProfil={styles.styleViewimgChoiceActionProfilCandidate}
              StyleImgChoiceProfil={styles.styleImgChoiceActionProfilCandidate}
              StyleViewConatinerTitleProfil={styles.styleViewContainerTitleActionProfilCandidate}
              StyleChoiceTitleProfil={styles.styleTitleActionProfilCandidate}
              ImgSourceProfilChoice={ImgForApp.imgScreenChoice.Candidate}
              TitleChoiceProfil={StringAppFr.screenProfileCandidate.editProfile}
            />
          </View>

          <View style={{ marginTop: 20, marginBottom: 20 }}>
            <ChoiceProfileCreation
              StyleViewContainerImgChoiceProfil={styles.styleViewimgChoiceActionProfilCandidate}
              StyleImgChoiceProfil={styles.styleImgChoiceActionProfilCandidate}
              StyleViewConatinerTitleProfil={styles.styleViewContainerTitleActionProfilCandidate}
              StyleChoiceTitleProfil={styles.styleTitleActionProfilCandidate}
              ImgSourceProfilChoice={ImgForApp.imgScreenChoice.SearchOffer}
              TitleChoiceProfil={StringAppFr.screenProfileCandidate.searchForAOffer}
            />
          </View>


        </View>
      </ScrollView>
      <FooterBar />

    </SafeAreaView>

  );
};

export default ScreenProfileCandidate;
