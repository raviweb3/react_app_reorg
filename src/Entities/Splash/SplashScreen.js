import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import SplashBackground from '../../assets/images/SplashBackground';
import SplashKarmaLogo from '../../assets/images/SplashKarmaLogo';

const SplashScreen = () => {
  return (
    < >
      <View style={{
        backgroundColor: '#000a10',
        flex: 1,
        flexDirection: 'column',
      }}>
        <View
          style={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
          }}>
          <Text style={[styles.splashTitle]}>Say goodbye to debt,</Text>
          <Text style={[styles.splashTitle, styles.bottomPadding20]}>say hello to</Text>
          <SplashKarmaLogo />
        </View>
        <View style={{ position: 'absolute', bottom: 0, left: 0 }}>
          <SplashBackground width={Dimensions.get('window').width} height={Dimensions.get('window').width * 0.9405555556} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  splashTitle:{
    color: '#ffffff',
    fontFamily: 'FiraSans-Regular',
    fontSize:20
  },
  bottomPadding20:{
    paddingBottom:20
  }
})
export default SplashScreen;
