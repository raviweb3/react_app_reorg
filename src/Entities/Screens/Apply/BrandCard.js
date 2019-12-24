import * as React from 'react';
import {View,ImageBackground,Image,Text} from 'react-native';
import  {viewStyle,applyContainer} from '../../../styles/componentStyle/viewStyle';
import   { applyCardButton ,buttonStyle} from '../../../styles/componentStyle/buttonStyle';
import  {textStyle,applyCardTxt} from '../../../styles/componentStyle/textStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GiftImageComponent from '../../../../assets/images/GiftImageComponent';
import ApplyCardComponent from '../../../../assets/images/ApplyCardComponent';
const BrandCard = (props) =>{
   const {brandInfo,brand_pressed}   = props;
  return (
      <View style={{marginTop:15,marginRight:10}}>
      <ImageBackground source={require('../../../../assets/images/coffeeCards.png')} style={viewStyle.cardContainer}>
         <View style={[applyContainer("71%","14%"),  viewStyle.flex_row]}>
            <TouchableOpacity style={applyCardButton(69,24,86)} onPress={() => brand_pressed({"isGift": true,"brandId": brandInfo.id})}>
                 <View style={viewStyle.cardFull}>
                      <GiftImageComponent />
                      <Text style={applyCardTxt(20,14,2)}>{"Gift"}</Text>
                 </View>
          
            </TouchableOpacity>
            <TouchableOpacity style={buttonStyle.giftBtn} onPress={() => brand_pressed({"isGift": false,"brandId": brandInfo.id})}>
            <View style={viewStyle.cardFull}>
                      <ApplyCardComponent/>
                      <Text style={applyCardTxt(31,17,0.9)}>{"Apply"}</Text>
                  </View>
           </TouchableOpacity>
         </View>
      </ImageBackground>
      </View>
    
    
  );
}
export default BrandCard;