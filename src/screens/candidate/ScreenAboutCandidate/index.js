import { Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import styles from "./StyleScreenAboutCandidate";
import StringAppFr from "../../../resources/strings/fr-FR";
import ImgForApp from "../../../resources/utils";
import NavBarApp from "../../../components/general/NavBarApp";
import HerosForApp from "../../../components/general/HerosForApp";
import SubTitleScreen from "../../../components/general/SubTitleScreen";
import ContentScreenMessage from "../../../components/general/ContentScreenMessage";

const ScreenAboutCandidate = () => {

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
                    ContentSubTitle={StringAppFr.screenAboutCandidate.subTitle}
                />
                <ContentScreenMessage
                    StyleViewContentMessageScreen={styles.styleViewContentMessageScreen}
                    StyleContentMessageScreen={styles.styleContentMessageScreen}
                    ContentMessageScreen={StringAppFr.screenAboutCandidate.about}
                />

            </ScrollView>
        </SafeAreaView>

    );

};

export default ScreenAboutCandidate;
