import colors from "../Entities/themes/variables/colors";

export default {
  tabBarOptions: {
    activeTintColor: colors.black,
    inactiveTintColor: colors.gray,
    style: {
      backgroundColor: colors.saffron,
      justifyContent: "center",
      alignSelf: "center",
      borderWidth: 1,
      borderColor: colors.grey
    },
    titleStyle: {
      justifyContent: "center",
      alignItems: "center"
    },
    labelStyle: {
      fontSize: 14,
      textAlign: "center",
      alignSelf: "center"
    }
  },
  cardsTabBarOptions: {
    borderTopColor: colors.saffron,
    activeTintColor: colors.saffron,
    inactiveTintColor: colors.white,
    style: {
      paddingTop: 10,
      backgroundColor: colors.black,
      justifyContent: "center",
      alignSelf: "center",
      borderWidth: 1,
      borderColor: colors.black
    },
    titleStyle: {
      justifyContent: "center",
      alignItems: "center"
    },
    labelStyle: {
      fontSize: 10,
      textAlign: "center",
      alignSelf: "center"
      // fontFamily: fonts.MontserratMedium,
    }
  },

  navBottomIcons: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginBottom: 5,
    marginTop: 5,
  }
};
