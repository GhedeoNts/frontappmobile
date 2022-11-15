import { Text, View, TextInput, Alert } from "react-native";
import React from "react";
import styles from "./StylesFormConnexion";
import StringAppFr from "../../../resources/strings/fr-FR";
import ButtonApp from "../ButtonApp";
import generalStylesApp from "../../../styles/generalStylesApp";

const FormLoginConnexion = ({ placeholderForm }) => {

    const messageTest = () => Alert.alert('Test MSG', 'Application is running');

    return (
        <View style={styles.containerform}>

            <View style={styles.viewSubTitleStyle}>
                <Text style={styles.subTitleStyle}>{StringAppFr.screenLoginCandidateOrRegister.subTitle}</Text>
            </View>

            <View style={styles.viewContainerInputMail}>
                <Text style={styles.styleinputLabel}>{StringAppFr.screenLoginCandidateOrRegister.formLabelText.mailAddress}</Text>
                <TextInput
                    style={styles.styleInputMail}
                    placeholder={placeholderForm.mailAddress}
                />
            </View>

            <View style={styles.viewContainerInputPassword}>
                <Text style={styles.styleinputLabel}>{StringAppFr.screenLoginCandidateOrRegister.formLabelText.passWords}</Text>
                <TextInput
                    style={styles.styleInputPassword}
                    placeholder={placeholderForm.passWords}
                />
            </View>


            <View style={styles.viewContainerTitleForgetPassword}>
                <Text style={styles.styletitleForgotPassword}>{StringAppFr.screenLoginCandidateOrRegister.titleForgotPassword}</Text>
            </View>

            <View style={styles.viewContainerButtonConnexion}>
                <ButtonApp
                    styleButton={styles.styleButtonConnexion}
                    styleTitle={styles.styleTitleButtonConnexion}
                    titleButton={StringAppFr.screenLoginCandidateOrRegister.buttonTitleConnexion}
                    ActiveOpacity={0.6}
                    UnderlayColor={generalStylesApp.ColorButton.ButtonConnexion}
                    OnPressButton={messageTest}
                />
            </View>

            <View style={styles.viewContainerButtonRegister}>
                <ButtonApp
                    styleButton={styles.styleButtonRegister}
                    styleTitle={styles.styleTitleButtonRegister}
                    titleButton={StringAppFr.screenLoginCandidateOrRegister.buttonTitleRegister}
                    ActiveOpacity={0.6}
                    UnderlayColor={generalStylesApp.ColorButton.ButtonRegister}
                    OnPressButton={messageTest}
                />
            </View>

        </View>
    );
};

export default FormLoginConnexion;
