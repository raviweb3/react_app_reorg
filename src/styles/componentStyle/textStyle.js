import { StyleSheet } from "react-native";
import colors from '../../Entities/themes/variables/colors'
import fonts from '../../Entities/themes/variables/fonts'
export default StyleSheet.create({
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