import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React from "react";
import styles from "./StyleScreenMessageSendMailChangingMdpCandidate";
import NavBarApp from "../../../../../components/general/NavBarApp";
import HerosForApp from "../../../../../components/general/HerosForApp";
import ImgForApp from "../../../../../resources/utils";
import ContentScreenMessage from "../../../../../components/general/ContentScreenMessage";
import ButtonApp from "../../../../../components/general/ButtonApp";
import StringAppFr from "../../../../../resources/strings/fr-FR";


const ScreenMessageSendMailChangingMdpCandidate = () => {
    return (

        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <NavBarApp />
                <HerosForApp
                    imgSource={ImgForApp.heros.imgHeroScreenMsgMdp}
                />

                <ContentScreenMessage
                    StyleViewContainer={styles.styleViewContainer}
                    StyleViewBodyTitle={styles.styleViewBodyTitle}
                    StyleBodyTitle={styles.styleBodyTitle}
                    ContentBodyTitle={StringAppFr.screenChangedPasswordValidation.bodyTitle}
                />

                <View style={styles.containerButtonApp}>
                    <ButtonApp
                        styleButton={styles.styleButton}
                        styleTitle={styles.styleTitle}
                        ActiveOpacity={0.6}
                        UnderlayColor={styles.underLayColor} titleButton={StringAppFr.screenChangedPasswordValidation.ButtonTitleFinish}

                    />
                </View>
            </ScrollView>
        </SafeAreaView>

    );
};

export default ScreenMessageSendMailChangingMdpCandidate;

