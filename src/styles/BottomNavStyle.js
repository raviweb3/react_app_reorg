import colors from "../Entities/themes/variables/colors";
import fonts from "../Entities/themes/variables/fonts";

export default {
  tabBarStyle:{
    activeTintColor: colors.saffron,
    activeBackgroundColor:colors.black,
    inactiveTintColor: colors.bottomGrey,
    inactiveBackgroundColor:colors.black,
    style: {
      height: 76
      },
      tabStyle:{
        borderTopColor: colors.saffron,
        borderWidth: 4
      },
      titleStyle: {
       justifyContent: "center",
        alignItems: "center",
        letterSpacing:0
    },
    labelStyle: {
      paddingTop:1,
      fontSize: 10,
      textAlign: "center",
      alignSelf: "center",
      marginTop: 0,
      fontFamily: fonts.FiraSansRegular,
    }
    
  },

  navBottomIcons: {
    width: 26,
    height: 26,
    resizeMode: "contain",
    paddingBottom: 0.8
  }
};

