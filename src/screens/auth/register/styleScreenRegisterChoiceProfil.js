import { StyleSheet } from "react-native";
import generalStylesApp from "../../../styles/generalStylesApp";

const styles = StyleSheet.create({

    containerScreenChoiceProfil: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        backgroundColor: '#fff'
    },

    viewSubTitleStyle: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },

    subTitleStyle: {
        fontSize: 20,
        fontWeight: '800',
        color: generalStylesApp.ColorFromApp.PRIMARY_COLOR,
        textAlign: 'center',
    },

});

export default styles