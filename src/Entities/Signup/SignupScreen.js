import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Icon } from 'native-base';
import StepIndicator from 'react-native-step-indicator';
import AccountDetailsScreen from './AccountDetails/AccountDetailsScreen';
import VerifyPhoneScreen from './VerifyPhoneScreen/VerifyPhoneScreen';


const SignupScreen = () => {
  const labels = ["VERIFY\nPHONE", "ACCOUNT\nDETAILS", "COMPLETE\nKYC"];
  const stepIndicatorStyle = {
    stepIndicatorSize: 17,
    currentStepIndicatorSize: 17,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#ffc939',
    stepStrokeWidth: 2,
    stepStrokeFinishedColor: '#ffc939',
    stepStrokeUnFinishedColor: 'rgba(255,255,255,0.5)',
    separatorFinishedColor: '#ffc939',
    separatorUnFinishedColor: 'rgba(255,255,255,0.5)',
    stepIndicatorFinishedColor: '#ffc939',
    stepIndicatorUnFinishedColor: '#000a10',
    stepIndicatorCurrentColor: '#ffc939',
    stepIndicatorLabelFontSize: 0,
    currentStepIndicatorLabelFontSize: 0,
    stepIndicatorLabelCurrentColor: 'transparent',
    stepIndicatorLabelFinishedColor: 'transparent',
    stepIndicatorLabelUnFinishedColor: 'transparent',
    labelColor: 'rgba(255,255,255,0.5)',
    labelSize: 13,
    labelFontFamily: 'FiraSans-Regular',
    currentStepLabelColor: '#ffffff'
  }

  const FragmentNavigations = [
    {
      screenName:"VerifyPhoneScreen",
      stepperValue:1
    },
    {
      screenName:"VerifyPhoneScreenOTP",
      stepperValue:1
    },
    {
      screenName:"AccountDetailsScreen",
      stepperValue:2
    },
    {
      screenName:"CompleteKYC",
      stepperValue:3
    }
  ]

  

  return (
    <View style={{
      backgroundColor: '#000a10',
      flex: 1,
      flexDirection: 'column',
    }}>
      <View
        style={{
          height: '100%',
          paddingTop: 30,
        }}>
        <Text style={{
          color: 'white',
          fontSize: 27,
          fontFamily: 'FiraSans-Regular',
          padding: 30
        }}>Sign Up</Text>
        <Icon style={{color:'white'}} />
        <View style={{ paddingBottom: 20 }}>
          <StepIndicator
            currentPosition={1}
            customStyles={stepIndicatorStyle}
            stepCount={labels.length}
            labels={labels} />
        </View>

        {/* <AccountDetailsScreen /> */}
        <VerifyPhoneScreen />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  splashTitle: {
    color: '#ffffff',
    fontFamily: 'FiraSans-Regular',
    fontSize: 20
  },
  bottomPadding20: {
    paddingBottom: 20
  },
  itemGroup: {
    marginBottom: 5,
  },
  item: {
    borderRadius: 5,
    borderColor: 'transparent',
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 5
  },
  inputItem: {
    color: '#ffffff',
    paddingLeft: 20,
  },
  disabledButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center'
  },
  disabledButtonText: {
    fontSize: 20,
    color: 'rgba(255,255,255,0.4)',
    fontFamily: 'FiraSans-Regular'
  },
  enabledButtonText: {
    fontFamily: 'FiraSans-Regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
  },
  enabledButton: {
    bottom: 0,
    backgroundColor: 'rgba(255,201,57,0.3)',
    borderColor: 'rgba(255,201,57,1)',
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center'
  },
  bottomPadding200: {
    paddingBottom: 200,
  },
  errorText: {
    color: '#ffc939'
  },
  submitButtonWrapper: {
    padding: 20,
    paddingBottom: 60,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
})
export default SignupScreen;
