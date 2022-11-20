import { Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import styles from "./StyleScreenPaginationPart3";
import StringAppFr from "../../../../../resources/strings/fr-FR";
import ImgForApp from "../../../../../resources/utils";
import NavBarApp from "../../../../../components/general/NavBarApp";
import HerosForApp from "../../../../../components/general/HerosForApp";
import SubTitleScreen from "../../../../../components/general/SubTitleScreen";
import MyAvailabilities from "../../../../../components/general/MyAvailabilities";
import FooterBar from "../../../../../components/general/FooterBar";
import PaginationApp from "../../../../../components/general/PaginationApp";


const ScreenPaginationPart3 = () => {

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
                <MyAvailabilities />
                <PaginationApp />
            </ScrollView>
        </SafeAreaView>

    );

};

export default ScreenPaginationPart3;
