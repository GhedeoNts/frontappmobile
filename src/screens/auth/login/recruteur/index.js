import { ScrollView, View } from "react-native";
import React from "react";
import NavBarApp from "../../../../components/general/NavBarApp";
import HerosForApp from "../../../../components/general/HerosForApp";
import FormLoginConnexion from "../../../../components/general/FormLoginConnexion";
import StringAppFr from "../../../../resources/strings/fr-FR";
import ImgForApp from "../../../../resources/utils";
import styles from "./StyleScreenLoginRecruiter";

const ScreenLoginRecruiter = () => {
    return (
        <ScrollView style={styles.body}>
            <NavBarApp />
            <HerosForApp imgSource={ImgForApp.imgHeroScreen} />
            <FormLoginConnexion placeholderForm={StringAppFr.screenLoginCandidateOrRegister.formLabelText.placeholderInputRecruiter} />
        </ScrollView>
    );
};

export default ScreenLoginRecruiter;

