import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./StyleChoiceProfileCreation";

const ChoiceProfileCreation = ({ StyleViewContainerImgChoiceProfil, StyleImgChoiceProfil, StyleViewConatinerTitleProfil, StyleChoiceTitleProfil, ImgSourceProfilChoice, TitleChoiceProfil }) => {
    return (
        <View style={styles.viewContainerChoiceProfil}>

            <View style={StyleViewContainerImgChoiceProfil}>
                <Image
                    style={StyleImgChoiceProfil}
                    source={ImgSourceProfilChoice}
                />
            </View>
            <View style={StyleViewConatinerTitleProfil}>
                <Text style={StyleChoiceTitleProfil}>{TitleChoiceProfil}</Text>
            </View>
        </View>
    );
};

export default ChoiceProfileCreation;
