import { View, Image } from "react-native";
import styles from "./stylesNavBar";
import React from "react";
import ImgForApp from "../../../resources/utils";

const NavBarApp = ({ ...props }) => {

    return (

        <View style={styles.viewNavBar}>
            <View style={styles.containerIconCAB}>
                <Image
                    source={ImgForApp.iconNavBar.imgIconCAB}
                    style={styles.imgIconCAB}
                />
            </View>
            <View style={styles.containerIcon}>
                <View style={styles.viewlogocandidatheader}>
                    <Image
                        source={ImgForApp.iconNavBar.imgIconCandidat}
                        style={styles.imgIconCandidat}
                    />
                </View>
                <View style={styles.viewlogorecruteurheader}>
                    <Image
                        source={ImgForApp.iconNavBar.imgIconRecruiter}
                        style={styles.imgIconRecruiter}
                    />
                </View>

            </View>
        </View>

    );
};

export default NavBarApp;

