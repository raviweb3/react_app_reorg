import * as React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../themes/variables/colors';
import fonts from '../themes/variables/fonts';
import { Header, Title, Button, Left, Right, Body, Icon } from "native-base";
import PropTypes from "prop-types";
function CommonHeader(props) {
  
    const {
      leftIconName,
      title,
      onPressLeftBtn,
      iosLeftIconName,
      androidLeftIconName,
      leftIconType,
      children
    } = props;
    return (
      <Header style={styles.container}>
        <Left style={styles.leftSegment}>
          {leftIconName || iosLeftIconName || androidLeftIconName || title ?  (
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
              {`${title}`.toUpperCase()}
            </Title>
            </Button>
          ) : null}
        </Left>
        <Body>
        </Body>
        <Right>
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
  container: {
    backgroundColor: colors.black
  },
  headerTitle: {
    width: 70,
    color: colors.white,
    // alignSelf: "flex-start",
    fontFamily: fonts.FiraSansRegular,
    fontSize: 17,
    letterSpacing: 2.11
  },
  titleBody: {
    flex: 5
  },
  leftSegment: {
    flex: 1
  },
  buttonStyle: {
    marginLeft: 8,
    marginRight:4,
    height: 50,
    width: 50
  },
  iconStyle: {
    fontSize: 16
  }
});

export default CommonHeader;
