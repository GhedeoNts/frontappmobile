import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import styles from "./StyleScreenMessageCreateProfileCandidate";
import StringAppFr from "../../../../../resources/strings/fr-FR";
import ImgForApp from "../../../../../resources/utils";
import NavBarApp from "../../../../../components/general/NavBarApp";
import HerosForApp from "../../../../../components/general/HerosForApp";
import ContentScreenMessage from "../../../../../components/general/ContentScreenMessage/index.js";

const ScreenMessageCreateProfileCandidate = () => {
    return (
        <SafeAreaView style={styles.container}>
            <NavBarApp />
            <HerosForApp
                imgSource={ImgForApp.heros.imgHeroScreenCreateProfilRecruiter}
            />
            <ContentScreenMessage
                StyleViewContainer={styles.styleViewContainer}
                StyleViewHeaderTitle={styles.styleViewHeaderTitle}
                StyleHeaderTitle={styles.styleHeaderTitle}
                ContentHeaderTitle={StringAppFr.screenRecruiterProfileValidation.headerTitle}
                StyleViewBodyTitle={styles.styleViewBodyTitle}
                StyleBodyTitle={styles.styleBodyTitle}
                ContentBodyTitle={StringAppFr.screenRecruiterProfileValidation.bodyTitle}
                StyleViewCurrentDate={styles.styleViewCurrentDate}
                StyleCurrentDate={styles.styleCurrentDate}
                CurrentDate={StringAppFr.screenRecruiterProfileValidation.screenValidityDate}
                StyleViewFooterTitle={styles.styleViewFooterTitle}
                StyleFooterTitle={styles.styleFooterTitle}
                ContentFooterTitle={StringAppFr.screenRecruiterProfileValidation.footerTitle}
            />
        </SafeAreaView>
    );
};

export default ScreenMessageCreateProfileCandidate;

