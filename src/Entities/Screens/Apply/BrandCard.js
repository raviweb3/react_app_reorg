import * as React from 'react';
import {View,ImageBackground,Image,Text} from 'react-native';
import  viewStyle from '../../../styles/componentStyle/viewStyle';
import  buttonStyle from '../../../styles/componentStyle/buttonStyle';
import  textStyle from '../../../styles/componentStyle/textStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GiftImageComponent from '../../../../assets/images/GiftImageComponent';
import ApplyCardComponent from '../../../../assets/images/ApplyCardComponent';
const BrandCard = () =>{
  return (
      <View>
      <ImageBackground source={require('../../../../assets/images/coffeeCards.png')} style={viewStyle.cardContainer}>
         <View style={[viewStyle.cardContainer, viewStyle.flex_row]}>
            <TouchableOpacity style={buttonStyle.applyBtn}>
                 <View style={viewStyle.cardFull}>
                      <GiftImageComponent />
                      <Text style={textStyle.giftTxt}>{"Gift"}</Text>
                 </View>
          
            </TouchableOpacity>
            <TouchableOpacity style={buttonStyle.giftBtn}>
            <View style={viewStyle.cardFull}>
                      <ApplyCardComponent/>
                      <Text style={textStyle.applyTxt}>{"Apply"}</Text>
                  </View>
           </TouchableOpacity>
         </View>
      </ImageBackground>
      </View>
    
    
  );
}
export default BrandCard;