import { StyleSheet, StatusBar } from "react-native";
import generalStylesApp from "../../../styles/generalStylesApp";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        marginHorizontal: 1,
    },

    styleViewSubTitle: {
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 30,
    },

    styleSubTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        textAlign: 'center',
    },

    containerChoiceActionProfilCandidate: {
        marginTop: 20,
        alignSelf: "center"
    },

    styleViewimgChoiceActionProfilCandidate: {
        width: 122,
        height: 158,
        alignSelf: "center",
        justifyContent: "center",
    },

    styleImgChoiceActionProfilCandidate: {
        width: 122,
        height: 122,
        borderRadius: 9,
    },

    styleViewContainerTitleActionProfilCandidate: {
        marginTop: 5,
        width: 130,
        height: 21,
        alignSelf: "center",
        justifyContent: "center",
    },

    styleTitleActionProfilCandidate: {
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        textAlign: "center",
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,
    }


});

export default styles;
