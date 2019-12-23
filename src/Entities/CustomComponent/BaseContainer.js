import React from 'react';
import colors from '../themes/variables/colors';
import {Container} from 'native-base';
import {StatusBar} from 'react-native';
function BaseContainer(props){
    const { children} = props;
    return(
        <Container>
        <StatusBar
          barStyle="light-content"
        />
         <Container style={{flex:1,backgroundColor:colors.black}}>
          {children}
        </Container>
       </Container>
    );
}
export default BaseContainer;