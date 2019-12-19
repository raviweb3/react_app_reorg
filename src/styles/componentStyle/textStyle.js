import { StyleSheet } from "react-native";
import colors from '../../Entities/themes/variables/colors'
import fonts from '../../Entities/themes/variables/fonts'
const textStyle =  StyleSheet.create({
  categoryText:{
    marginLeft: 9.6,
    fontSize: 15,
    color: colors.white,
    fontFamily: fonts.FiraSansRegular
  },
  applyTxt:{
      width: 31,
      height: 17,
      fontSize:12,
      fontFamily: fonts.FiraSansRegular,
      color: colors.white,
      textAlign: "center",
      marginLeft: 0.9
  },
  giftTxt:{
    width: 20,
    height: 14,
    fontSize:12,
    fontFamily: fonts.FiraSansRegular,
    color: colors.white,
    textAlign: "center",
    marginLeft: 2
  }
});
const applyCardTxt = function(width,height,marginLeft){
  return{
    width: width,
    height: height,
    fontSize:12,
    fontFamily: fonts.FiraSansRegular,
    color: colors.white,
    textAlign: "center",
    marginLeft: marginLeft
  }
}
export {textStyle,applyCardTxt};