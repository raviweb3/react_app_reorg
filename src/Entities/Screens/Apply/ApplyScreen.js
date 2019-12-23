import * as React from 'react';
import {View,FlatList,Text} from 'react-native';
import data from '../Apply/CategoryBrandInfo.json'
import BrandCard from './BrandCard';
import colors from '../../themes/variables/colors'
import {viewStyle,categoryDotView} from '../../../styles/componentStyle/viewStyle';
import {textStyle} from '../../../styles/componentStyle/textStyle';
import CommonStatusBar from '../../CustomComponent/CommonStatusBar'
import CommonHeader from '../../CustomComponent/CommonHeader';
import BaseContainer from '../../CustomComponent/BaseContainer';

 export default function ApplyScreen() {
    return (
      <BaseContainer>
      <CommonHeader title="KARMA" leftIconName="arrow-back" ></CommonHeader>
      <CommonStatusBar title="Apply" rightIcon='ios-search' statusBarColor={colors.black}/>
        <FlatList
          data={data}
          renderItem={({ item }) => <CategoryComponent title={item} />}
          keyExtractor={item => item.id}
        />
      </BaseContainer>
    );
  }
  function CategoryComponent({ title }) {
    return (
      <View>
      <View style={viewStyle.categoryView}>
        <View style={viewStyle.cardAlign}>
          <View style={categoryDotView(title.categoryColor)}></View>
          <Text style={textStyle.categoryText}>{`${title.categoryName} (${title.brandsInfo.length})`}</Text>
        </View>
        <View>
          <FlatList horizontal={true}
                    data={title.brandsInfo}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => 
                              <BrandCard/>
                               }>
           </FlatList>
        </View>
        
     </View>
     <View style={{height:1,backgroundColor:colors.grey,opacity: 0.2}}></View>
     </View>
    );
  }

  
