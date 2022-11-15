import { View, Image } from "react-native";
import React from "react";
import styles from "./styles.LogoCab";
import ImgForApp from "../../resources/utils";

const LogoCAB = () => {
    return (
        <View style={styles.container}>
            <Image
                source={ImgForApp.imgLogoCAB}
                style={styles.imgLogoCabStyle}
            />
        </View>
    );
};

export default LogoCAB;
