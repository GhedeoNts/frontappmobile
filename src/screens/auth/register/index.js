import { Text, View } from "react-native";
import React from "react";
import styles from "./styleScreenRegisterChoiceProfil";
import StringAppFr from "../../../resources/strings/fr-FR";
import HerosForApp from "../../../components/general/HerosForApp";
import ImgForApp from "../../../resources/utils";

const ScreenRegisterChoiceProfil = () => {
    return (
        <View style={styles.containerScreenChoiceProfil}>
            <HerosForApp imgSource={ImgForApp.imgHeroScreen} />
            <View style={styles.viewSubTitleStyle}>
                <Text style={styles.subTitleStyle}>{StringAppFr.screenRegisterChoiceProfil.subTitle}</Text>
            </View>
            <View>

            </View>
        </View>
    );
};

export default ScreenRegisterChoiceProfil;

