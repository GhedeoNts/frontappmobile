import { View, Image } from "react-native";
import styles from "./stylesNavBar";
import React from "react";
import ImgForApp from "../../../resources/utils";

const NavBarApp = ({ StyleViewIcon, StyleIconImg, imgSourceIcon }) => {

    return (

        <View style={styles.viewNavBar}>

            <View style={styles.containerIconCAB}>
                <Image
                    source={ImgForApp.iconNavBar.imgIconCAB}
                    style={styles.imgIconCAB}
                />
            </View>

            <View style={StyleViewIcon}>

                <View style={styles.viewlogocandidatheader}>

                    <Image
                        source={imgSourceIcon}
                        style={StyleIconImg}
                    />
                </View>

            </View>

        </View>

    );
};

export default NavBarApp;

