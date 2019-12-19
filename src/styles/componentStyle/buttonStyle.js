import { StyleSheet } from "react-native";
import colors from '../../Entities/themes/variables/colors'
const buttonStyle = StyleSheet.create({
    applyBtn:{
        width: 69,
        height:24,
        borderRadius:5,
        marginBottom: 30,
        marginTop: 57,
        marginLeft: 86,
        borderColor: colors.white,
        borderWidth: 1
    },
    giftBtn:{
        width: 80,
        height:24,
        borderRadius:5,
        marginBottom: 30,
        marginTop: 57,
        marginLeft: 10,
        borderColor: colors.white,
        borderWidth: 1
    }
});

const applyCardButton = function(width,height,marginLeft){
    return{
        width: width,
        height: height,
        borderRadius:5,
        marginBottom: 30,
        marginTop: 57,
        marginLeft: marginLeft,
        borderColor: colors.white,
        borderWidth: 1
    }
}

export {
    buttonStyle,
    applyCardButton
}