import { Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import styles from './StylesCreateProfilRecruiter';
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
import FormCreateProfilRecruiter from "../../../../../components/general/FormCreateProfilRecruiter";


const ScreenCreateProfilRecruiter = () => {

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.styleScrollView}>

                <NavBarApp />
                <HerosForApp
                    imgSource={ImgForApp.heros.imgHeroScreenCreateProfilRecruiter}
                />
                <SubTitleScreen
                    StyleViewSubTitle={styles.styleViewSubTitle}
                    StyleSubTitle={styles.styleSubTitle}
                    ContentSubTitle={StringAppFr.screenCreateYourProfileRecruiter.subTitle}
                />

                <FormCreateProfilRecruiter />

                <View>
                    <ButtonApp
                        styleButton={styles.styleButton}
                        styleTitle={styles.styleTitle}
                        ActiveOpacity={0.6}
                        UnderlayColor={styles.underLayColor} titleButton={StringAppFr.screenCreateYourProfileRecruiter.ButtonTitleValidate}

                    />
                </View>

                <FooterBar />
            </ScrollView>
        </SafeAreaView>

    );

};

export default ScreenCreateProfilRecruiter;
