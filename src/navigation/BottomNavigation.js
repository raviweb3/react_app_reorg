import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Image} from 'react-native';
const CardsBottomNavigation = createBottomTabNavigator(
    {
      Apply: {
        screen: Apply,
        navigationOptions: {
          tabBarTestID: 'applyScreen-testId'
        }
      },
      Dashboard: {
        screen: Dashboard,
        navigationOptions: {
          tabBarTestID: "dashboardScreen-testId"
        }
      },
      Cards: {
        screen: Cards,
        navigationOptions: {
          tabBarTestID: "cardsScreen-testId"
        }
      },
      Options: {
        screen: Options,
        navigationOptions: {
          tabBarTestID: "optionsScreen-testId"
        }
      }
    },
    {
      initialRouteName: "Apply",
      tabBarOptions: styles.cardsTabBarOptions,
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {
          const { routeName } = navigation.state;
          let iconName;
          switch (routeName) {
            case "Apply":
              iconName = focused
                ? require("@assets/images/Apply_y.png")
                : require("@assets/images/Apply_w.png");
              break;
            case "Dashboard":
              iconName = focused
                ? require("@assets/images/Summary_y.png")
                : require("@assets/images/Summary_w.png");
              break;
            case "Cards":
              iconName = focused
                ? require("@assets/images/Creditcard_y.png")
                : require("@assets/images/Creditcard_w.png");
              break;
            case "More":
              iconName = focused
                ? require("@assets/images/More_y.png")
                : require("@assets/images/More_w.png");
              break;
          }
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Image source={iconName} style={styles.navBottomIcons} />;
        }
      })
    }
  );
  
 