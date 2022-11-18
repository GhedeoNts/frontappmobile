import { Text, View, SafeAreaView, ScrollView, StatusBar } from "react-native";
import React from "react";
import styles from "./StyleScreenRegisterCandidate";
import StringAppFr from "../../../../../resources/strings/fr-FR";
import ImgForApp from '../../../../../resources/utils';
import NavBarApp from '../../../../../components/general/NavBarApp';
import HerosForApp from '../../../../../components/general/HerosForApp';
import SubTitleScreen from '../../../../../components/general/SubTitleScreen';
import InputFromApp from '../../../../../components/general/InputFormApp';
import LabelInputApp from "../../../../../components/general/LabelInputApp";
import ButtonApp from "../../../../../components/general/ButtonApp";
import generalStylesApp from "../../../../../styles/generalStylesApp";
import FooterBar from "../../../../../components/general/FooterBar";



const ScreenRegisterCandidate = () => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>

                <NavBarApp />
                <HerosForApp
                    imgSource={ImgForApp.heros.imgHeroScreenCreateProfilCandidate}
                />
                <SubTitleScreen
                    StyleViewSubTitle={styles.styleViewSubTitle}
                    StyleSubTitle={styles.styleSubTitle}
                    ContentSubTitle={StringAppFr.screenRegisterCandidat.subTitle}
                />

                <InputFromApp
                    LabelInput={
                        <LabelInputApp
                            StyleViewInputLabel={styles.styleViewInputLabelMail}
                            StyleInputLabel={styles.styleInputLabelMail}
                            ContentLabel={StringAppFr.screenRegisterCandidat.labelInputMailAddress}
                        />
                    }
                    StyleViewContainerInputForm={styles.styleViewContainerInputForm}
                    StyleInputForm={styles.styleInputForm}
                />

                <InputFromApp
                    LabelInput={
                        <LabelInputApp
                            StyleViewInputLabel={styles.styleViewInputLabelPassword}
                            StyleInputLabel={styles.styleInputLabelPassword}
                            ContentLabel={StringAppFr.screenRegisterCandidat.labelInputPassWords}
                        />
                    }
                    StyleViewContainerInputForm={styles.styleViewContainerInputForm}
                    StyleInputForm={styles.styleInputForm}
                />

                <InputFromApp
                    LabelInput={
                        <LabelInputApp
                            StyleViewInputLabel={styles.styleViewInputLabelPasswordConfirmation}
                            StyleInputLabel={styles.styleInputLabelPasswordConfirmation}
                            ContentLabel={StringAppFr.screenRegisterCandidat.labelInputPasswordConfirmation}
                        />
                    }
                    StyleViewContainerInputForm={styles.styleViewContainerInputForm}
                    StyleInputForm={styles.styleInputForm}
                />
                <View>
                    <ButtonApp
                        styleButton={styles.styleButton}
                        styleTitle={styles.styleTitle}
                        titleButton={StringAppFr.screenRegisterCandidat.buttonTitleRegister}
                        ActiveOpacity={0.6}
                        UnderlayColor={styles.underLayColor}

                    />
                </View>
                <FooterBar />
            </ScrollView>
        </SafeAreaView>


    );

};

export default ScreenRegisterCandidate;
