import { Text, View } from "react-native";
import React from "react";

const SubTitleScreen = ({ StyleViewSubTitle, StyleSubTitle, ContentSubTitle }) => {
    return (
        <View style={StyleViewSubTitle}>
            <Text style={StyleSubTitle}>{ContentSubTitle}</Text>
        </View>
    );
};

export default SubTitleScreen;
