import * as React from 'react';
import {Text,Header,Left,Right, Icon, Button} from 'native-base';
import {StyleSheet} from 'react-native';
import colors from '../themes/variables/colors';
import fonts from '../themes/variables/fonts';
import {responsiveFontSize} from '../../styles/pxDimensions'
import PropTypes from "prop-types";
function CommonStatusBar(props){
  const { statusBarColor,title,rightIcon,rightIconType} = props;
  return(
   <Header style={{backgroundColor: colors.black,height: 40}}  iosBarStyle={"light-content"} androidStatusBarColor={statusBarColor}>
       <Left>
          <Text style={styles.titleTxt}>{title}</Text>
       </Left>
       <Right>
         <Button transparent>
         <Icon name="arrow-back" android="arrow-back" style={{fontSize:16}}/>
         </Button>
        {/* {
        rightIcon ? <Icon name={rightIcon} ios={rightIcon}
        android={rightIcon}> </Icon> : null
        } */}
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