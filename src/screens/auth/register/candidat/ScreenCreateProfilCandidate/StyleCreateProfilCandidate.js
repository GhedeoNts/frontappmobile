import { StyleSheet } from "react-native";
import generalStylesApp from "../../../../../styles/generalStylesApp";

const styles = StyleSheet.create({

    containerScreenCreateProfil: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
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


});

export default styles;
