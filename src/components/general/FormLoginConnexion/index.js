import { Text, View, TextInput, Alert } from "react-native";
import React from "react";
import styles from "./StylesFormConnexion";
import StringAppFr from "../../../resources/strings/fr-FR";
import ButtonApp from "../ButtonApp";
import generalStylesApp from "../../../styles/generalStylesApp";
import LabelInputApp from "../LabelInputApp";
import InputFormApp from "../InputFormApp";

const FormLoginConnexion = ({ placeholderForm }) => {

    const messageTest = () => Alert.alert('Test MSG', 'Application is running');

    return (
        <View style={styles.containerform}>

            <View style={styles.viewSubTitleStyle}>
                <Text style={styles.subTitleStyle}>{StringAppFr.screenLoginCandidateOrRegister.subTitle}</Text>
            </View>

            <InputFormApp
                StyleViewContainerInputForm={styles.viewContainerInputMail}
                LabelInput={<LabelInputApp
                    StyleInputLabel={styles.styleinputLabel}
                    ContentLabel={StringAppFr.screenLoginCandidateOrRegister.formLabelText.mailAddress}
                />}
                StyleInputForm={styles.styleInputMail}
                PlaceholderForm={placeholderForm.mailAddress}
            />


            <InputFormApp
                StyleViewContainerInputForm={styles.viewContainerInputPassword}
                LabelInput={<LabelInputApp
                    StyleInputLabel={styles.styleinputLabel}
                    ContentLabel={StringAppFr.screenLoginCandidateOrRegister.formLabelText.passWords}
                />}
                StyleInputForm={styles.styleInputPassword}
                PlaceholderForm={placeholderForm.passWords}
            />

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
