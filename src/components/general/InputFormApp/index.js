import { Text, View, TextInput } from "react-native";
import React, { TextField } from "react";

const InputFormApp = ({ StyleViewContainerInputForm, StyleInputForm, PlaceholderForm, LabelInput, ValueInputForm }) => {

    return (

        <View style={StyleViewContainerInputForm}>
            {LabelInput}
            <TextInput
                style={StyleInputForm}
                placeholder={PlaceholderForm}
            />
        </View>

    );

};

export default InputFormApp;
