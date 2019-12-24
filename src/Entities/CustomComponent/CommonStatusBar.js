import * as React from 'react';
import {Text,Header,Left,Right, Icon, Button} from 'native-base';
import {StyleSheet} from 'react-native';
import colors from '../themes/variables/colors';
import fonts from '../themes/variables/fonts';
import {responsiveFontSize} from '../../styles/pxDimensions';
import SearchImage from '../../../assets/images/SearchImage';
import PopupImage from '../../../assets/images/PopupImage';
import PropTypes from "prop-types";
function CommonStatusBar(props){
  const { bgColor,title,rightIcon,rightIconType,onPressRightBtn} = props;
  return(
   <Header style={{backgroundColor: bgColor || colors.black,height:40}}  iosBarStyle={"light-content"} androidStatusBarColor={bgColor || colors.black}>
       <Left>
          <Text style={styles.titleTxt}>{title}</Text>
       </Left>
       <Right>
         {
           rightIcon === 'search' ? (
                  <Button transparent onPress={onPressRightBtn}>
                  <SearchImage/>
                  </Button>
           )  : rightIcon == 'popup'   ? (
                  <Button transparent onPress={onPressRightBtn}>
                  <PopupImage/>
                  </Button>  
          ) : null
         }
         
       </Right>
   </Header>
  );
}

const styles = StyleSheet.create({
  titleTxt:{
    paddingLeft:25,
    lineHeight: 30.7,
    color: colors.white,
    fontFamily: fonts.FiraSansRegular,
    fontSize: responsiveFontSize(23)
  }
}
  
)
CommonStatusBar.PropTypes = {
  title: PropTypes.string.isRequired,
  rightIcon: PropTypes.string
}
export default CommonStatusBar;