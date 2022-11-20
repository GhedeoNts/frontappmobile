import { Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import styles from "./StyleScreenPaginationPart2";
import StringAppFr from "../../../../../resources/strings/fr-FR";
import ImgForApp from "../../../../../resources/utils";
import NavBarApp from "../../../../../components/general/NavBarApp";
import HerosForApp from "../../../../../components/general/HerosForApp";
import SubTitleScreen from "../../../../../components/general/SubTitleScreen";
import ContainerDegree from "../../../../../components/general/ContainerDegree";
import FooterBar from "../../../../../components/general/FooterBar";
import PaginationApp from "../../../../../components/general/PaginationApp";

const ScreenPaginationPart2 = () => {

    return (

        <SafeAreaView style={styles}>
            <ScrollView style={styles}>

                <NavBarApp />
                <HerosForApp
                    imgSource={ImgForApp.heros.imgHeroScreenCreateProfilCandidate}
                />
                <SubTitleScreen
                    StyleViewSubTitle={styles.styleViewSubTitle}
                    StyleSubTitle={styles.styleSubTitle}
                    ContentSubTitle={StringAppFr.screenProfileEditCandidate.subTitle}
                />
                <ContainerDegree />
                <PaginationApp />
            </ScrollView>
        </SafeAreaView>

    );

};

export default ScreenPaginationPart2;
