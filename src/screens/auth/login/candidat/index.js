import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import NavBarApp from "../../../../components/general/NavBarApp";
import HerosForApp from "../../../../components/general/HerosForApp";
import FormLoginConnexion from "../../../../components/general/FormLoginConnexion";
import StringAppFr from "../../../../resources/strings/fr-FR";
import ImgForApp from "../../../../resources/utils";

const ScreenLoginCandidate = () => {
    return (
        <ScrollView style={styles.body}>
            <NavBarApp />
            <HerosForApp imgSource={ImgForApp.imgHeroScreenConnexion} />

            <FormLoginConnexion placeholderForm={StringAppFr.screenLoginCandidateOrRegister.formLabelText.placeholderInputCandidate} />
        </ScrollView>
    );
};

export default ScreenLoginCandidate;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
    }

});
