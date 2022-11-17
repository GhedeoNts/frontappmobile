import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./StyleCreateProfilCandidate";
import NavBarApp from "../../../../../components/general/NavBarApp";
import HerosForApp from "../../../../../components/general/HerosForApp";
import ImgForApp from "../../../../../resources/utils";
import SubTitleScreen from "../../../../../components/general/SubTitleScreen";
import StringAppFr from "../../../../../resources/strings/fr-FR";
import FormCreateCandidate from "../../../../../components/general/FormCreateCandidate";

const ScreenCreateProfilCandidate = () => {

    return (

        <ScrollView style={styles.containerScreenCreateProfil}>

            <NavBarApp
                ImgSourceIcon={ImgForApp.iconNavBar.imgIconCandidat}
            />

            <HerosForApp
                imgSource={ImgForApp.heros.imgHeroScreenCreateProfilCandidate}
            />

            <SubTitleScreen
                StyleViewSubTitle={styles.styleViewSubTitle}
                StyleSubTitle={styles.styleSubTitle}
                ContentSubTitle={StringAppFr.screenCreateYourProfileCandidate.subTitle}
            />
            <FormCreateCandidate />
        </ScrollView>

    );
};

export default ScreenCreateProfilCandidate;
