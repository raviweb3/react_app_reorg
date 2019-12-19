import { StyleSheet } from "react-native";
import colors from '../../Entities/themes/variables/colors';
import fonts from '../../Entities/themes/variables/fonts';
const viewStyle =  StyleSheet.create({
    cardContainer:{
        width: 265,
        height:111
    },
    flex_row:{
        flexDirection: 'row'
    },
    cardFull:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    cardAlign:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center'
    },
    card_flex:{
        flex: 1,
        backgroundColor: colors.black
      },
     categoryView:{
            paddingLeft: 26.9,
            paddingTop: 20,
            paddingBottom: 25,
            marginVertical: 8
           
     }  
});

const categoryDotView = function(backgroundColor){
    return{
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: backgroundColor
    }
}

export {viewStyle,categoryDotView};