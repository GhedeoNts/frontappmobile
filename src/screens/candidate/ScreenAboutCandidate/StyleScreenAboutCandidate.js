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

    StyleViewContainer: {
        marginTop: 96,
    },

    styleViewContentMessageScreen: {
        alignSelf: "center",
        width: 341,
        height: 200,
        marginTop: 39,
        marginBottom: 6,
    },

    styleContentMessageScreen: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 22,
        textAlign: "justify",
    },
});

export default styles;
