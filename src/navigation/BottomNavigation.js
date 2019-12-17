import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import ApplyScreen from '../Entities/Screens/Apply/ApplyScreen';
import CardsScreen from '../Entities/Screens/Cards/CardsScreen';
import DashBoardScreen from '../Entities/Screens/DashBoard/DashBoardScreen';
import OptionsScreen from '../Entities/Screens/Options/OptionsScreen';
import styles from '../styles/BottomNavStyle';
const BottomNavigation = createBottomTabNavigator(
    {
      ApplyScreen: {
        screen: ApplyScreen,
        navigationOptions: {
          tabBarTestID: 'applyScreen-testId'
        }
      },
      DashBoardScreen: {
        screen: DashBoardScreen,
        navigationOptions: {
          tabBarTestID: "dashboardScreen-testId"
        }
      },
      CardsScreen: {
        screen: CardsScreen,
        navigationOptions: {
          tabBarTestID: "cardsScreen-testId"
        }
      },
      OptionsScreen: {
        screen: OptionsScreen,
        navigationOptions: {
          tabBarTestID: "optionsScreen-testId"
        }
      }
    },
    {
      initialRouteName: "ApplyScreen",
      tabBarOptions: styles.cardsTabBarOptions,
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {
          const { routeName } = navigation.state;
          let iconName;
          switch (routeName) {
            case "ApplyScreen":
              iconName = focused
                ? require("../../assets/images/Apply_y.png")
                : require("../../assets/images/Apply_w.png");
              break;
            case "DashBoardScreen":
              iconName = focused
                ? require("../../assets/images/Summary_y.png")
                : require("../../assets/images/Summary_w.png");
              break;
            case "CardsScreen":
              iconName = focused
                ? require("../../assets/images/Creditcard_y.png")
                : require("../../assets/images/Creditcard_w.png");
              break;
            case "OptionsScreen":
              iconName = focused
                ? require("../../assets/images/More_y.png")
                : require("../../assets/images/More_w.png");
              break;
          }
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Image source={iconName} style={styles.navBottomIcons} />;
        }
      })
    }
  );
  export default BottomNavigation;
  //export default createAppContainer(BottomNavigation);