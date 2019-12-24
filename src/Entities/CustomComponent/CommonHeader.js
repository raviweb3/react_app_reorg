import * as React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../themes/variables/colors';
import fonts from '../themes/variables/fonts';
import { Header, Title, Button, Left, Right, Body, Icon } from "native-base";
import PropTypes from "prop-types";
import KarmaLogo from '../../../assets/images/KarmaLogo'
function CommonHeader(props) {
  
    const {
      headerBgColor,
      leftIconName,
      title,
      onPressLeftBtn,
      iosLeftIconName,
      androidLeftIconName,
      leftIconType,
      centerLogo,
      children
    } = props;
    return (
      <Header style={{backgroundColor: headerBgColor || colors.black}} iosBarStyle={"light-content"} androidStatusBarColor={headerBgColor || colors.black}>
        <Left style={{flex:1}} >
          {leftIconName || iosLeftIconName || androidLeftIconName ?  (
            <Button
              transparent
              style={styles.buttonStyle}
              onPress={onPressLeftBtn}
            >
              <Icon
                name={leftIconName}
                style={styles.iconStyle}
                ios={iosLeftIconName}
                android={androidLeftIconName}
                type={leftIconType}
              />
               <Title
              style={styles.headerTitle}
            >
              {`${title}`}
            </Title>
            </Button>
          ) : (
            <Button
              transparent
            >
              <KarmaLogo style={styles.iconStyle}/>
               <Title
              style={styles.karmaTitle}
            >
              {'KARMA'}
            </Title>
            </Button>
          ) }
        </Left>
        <Body style={{flex:1}}>
     {
       centerLogo ? (<Button transparent><KarmaLogo/></Button>) : null
     }
        </Body>
        <Right style={{flex:1}}>
        </Right>
      </Header>
    );
  
}

CommonHeader.propTypes = {
  leftIconName: PropTypes.string,
  title: PropTypes.string.isRequired,
  onPressLeftBtn: PropTypes.func,
};
const styles = StyleSheet.create({
  headerTitle: {
    width: 60,
    color: colors.white,
    alignSelf: "center",
    fontFamily: fonts.FiraSansRegular,
    fontSize: 17,
    letterSpacing: 2.11
  },
  karmaTitle: {
    width: 80,
    color: colors.white,
    alignSelf: "center",
    fontFamily: fonts.FiraSansRegular,
    fontSize: 17,
    letterSpacing: 2.11
  },
  titleBody: {
    flex: 5
  },
  buttonStyle: {
    marginLeft: 4,
    marginRight:1,
    height: 75,
    width: 70
  },
  iconStyle: {
    color: colors.saffron,
    fontSize: 23,
    marginLeft: 15,
    marginRight: 6.7
  }
});

export default CommonHeader;
