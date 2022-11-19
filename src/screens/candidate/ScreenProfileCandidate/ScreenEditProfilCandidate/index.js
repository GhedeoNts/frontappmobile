import { Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import styles from "./StyleScreenEditProfilCandidate";
import StringAppFr from "../../../../resources/strings/fr-FR";
import ImgForApp from "../../../../resources/utils";
import NavBarApp from "../../../../components/general/NavBarApp";
import HerosForApp from "../../../../components/general/HerosForApp";
import SubTitleScreen from "../../../../components/general/SubTitleScreen";
import FormCreateCandidate from "../../../../components/general/FormCreateCandidate";
import FooterBar from "../../../../components/general/FooterBar";


const ScreenEditProfilCandidate = () => {

    return (

        <SafeAreaView style={styles}>
            <ScrollView style={styles}>

                <NavBarApp />
                <HerosForApp />
                <SubTitleScreen />

            </ScrollView>
        </SafeAreaView>

    );

};

export default ScreenEditProfilCandidate;
