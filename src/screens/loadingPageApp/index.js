import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LogoCab from "../../components/LogoCab";
import generalStylesApp from '../../styles/generalStylesApp/index'

const LoadingPageApp = () => {
    return (
        <View style={styles.body}>
            <LogoCab />
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
    }
});

export default LoadingPageApp;
