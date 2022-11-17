import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import styles from "./styleScreenRegisterChoiceProfil";
import StringAppFr from "../../../resources/strings/fr-FR";
import HerosForApp from "../../../components/general/HerosForApp";
import ImgForApp from "../../../resources/utils";
import NavBarApp from "../../../components/general/NavBarApp";
import ChoiceProfileCreation from "../../../components/general/ChoiceProfileCreation";
import SubTitleScreen from "../../../components/general/SubTitleScreen";
const ScreenRegisterChoiceProfil = () => {
    return (
        <ScrollView style={styles.body}>

            <NavBarApp ImgSourceIcon={ImgForApp.iconNavBar.imgIconCandidat} />

            <HerosForApp imgSource={ImgForApp.heros.imgHeroScreen} />

            <View style={styles.containerScreenChoiceProfil}>

                <SubTitleScreen
                    StyleSubTitle={styles.subTitleStyle}
                    StyleViewSubTitle={styles.viewSubTitleStyle}
                    ContentSubTitle={StringAppFr.screenRegisterChoiceProfil.subTitle}
                />

                <ChoiceProfileCreation
                    StyleViewContainerImgChoiceProfil={styles.ContainerimgChoiceProfil}
                    StyleImgChoiceProfil={styles.imgChoiceProfil}
                    StyleViewConatinerTitleProfil={styles.viewContainerTitleProfil}
                    StyleChoiceTitleProfil={styles.styleTitleProfil}
                    ImgSourceProfilChoice={ImgForApp.imgScreenChoice.Candidate}
                    TitleChoiceProfil={StringAppFr.screenRegisterChoiceProfil.candidateSectionTitle}
                />

                <ChoiceProfileCreation
                    StyleViewContainerImgChoiceProfil={styles.ContainerimgChoiceProfil}
                    StyleImgChoiceProfil={styles.imgChoiceProfil}
                    StyleViewConatinerTitleProfil={styles.viewContainerTitleProfil}
                    StyleChoiceTitleProfil={styles.styleTitleProfil}
                    ImgSourceProfilChoice={ImgForApp.imgScreenChoice.Recruiter}
                    TitleChoiceProfil={StringAppFr.screenRegisterChoiceProfil.recruiterSectionTitle}
                />

            </View>
        </ScrollView>
    );
};

export default ScreenRegisterChoiceProfil;

