import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Text, Header, Content, Input, Item, Form, Button, Icon } from 'native-base';
import LoginBackground from '../../assets/images/LoginBackground';
import FormValidation from '../../utils/FormValidation';

const LoginScreen = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  // Define your state schema
  const stateSchema = {
    email: { value: '', error: '' },
    password: { value: '', error: '' },
  };

  const validationStateSchema = {
    email: {
      required: true,
      validator: {
        regEx: {
          value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          error: 'Invalid email format.'
        },
      },
    },
    password: {
      required: true,
      validator: {
        regEx: {
          value: /^[a-zA-Z0-9!@$%.,_+-]+$/,
          error: 'Invalid password format.'
        },
        minLength: {
          value: 6,
          error: 'Please enter atleast 6 '
        }
      },
    }
  };

  function onSubmitForm(state) {
    alert(JSON.stringify(state, null, 2));
  }

  const { state,
    handleOnChange,
    handleOnSubmit,
    disableButton } = FormValidation(stateSchema, validationStateSchema, onSubmitForm);


  return (
    <Container style={styles.background}>
      <Header style={styles.background} />
      <Content style={[styles.background, styles.topBottomPadding]}>
        <View style={[styles.row, styles.leftPadding20]}>
          <View style={styles.rowLeft}>
            <Text style={[styles.white, styles.text]}>Back</Text>
          </View>
          <View style={styles.rowCenter}>
            {/* Karma Logo */}
            <View style={styles.outerCircle}>
              <View style={styles.innerCircle} />
            </View>
          </View>
          <View style={styles.rowRight}>
          </View>
        </View>
        <View style={[styles.row, styles.leftPadding20, styles.botttomPadding0]}>
          <Text style={[styles.white, styles.subHeading]}>Sign In</Text>
        </View>
        <View style={[styles.row]}>
          <LoginBackground width={Dimensions.get('window').width} height={Dimensions.get('window').width * 0.7722222222} />
        </View>
        <View style={[styles.row, styles.selfAlignCenter, { height: 68, alignItems: 'center' }]}>
          <Text style={[styles.white, styles.heading]}>Enter your login details</Text>
        </View>
        <View style={[styles.leftPadding30, styles.rightPadding30, styles.botttomPadding15]}>
          <Form>
            <Item regular style={[styles.item]}>
              <Input
                placeholder="Enter Email ID"
                keyboardType='email-address'
                name='email'
                style={[styles.white, styles.leftPadding20]}
                value={state.email.value}
                onChangeText={(email) => {
                  handleOnChange({
                    name: 'email',
                    text: email
                  })
                }} />
              {!state.email.error && state.email.value ? <Icon style={styles.white} name='checkmark-circle' /> : null}
            </Item>
            <Text style={styles.orange}>
              {state.email.error}
            </Text>
            <View style={[styles.itemGroup]}>
              <Item regular style={[styles.item]}>
                <Input
                  placeholder="Enter Password"
                  name='password'
                  secureTextEntry={!isShowPassword}
                  style={[styles.white, styles.leftPadding20]}
                  value={state.password.value}
                  onChange={(password) => {
                    handleOnChange({
                      name: 'password',
                      text: password
                    })
                  }} />
                <TouchableOpacity onPressOut={() => setIsShowPassword(!isShowPassword)}>
                  {state.password.value ? <Icon style={styles.white} name={isShowPassword ? 'eye-off' : 'eye'} /> : null}
                </TouchableOpacity>
              </Item>
              <Text style={[styles.orange]}>
                {state.password.error}{disableButton}
              </Text>
            </View>
            <Button
              disabled={disableButton}
              onPress={handleOnSubmit}
              style={disableButton ? styles.disabledButton : styles.enabledButton}>
              <Text style={disableButton ? styles.disabledButtonText : styles.enabledButtonText} uppercase={false}>Sign In</Text>
            </Button>
          </Form>
        </View>
        <View style={[styles.row, styles.justifyCenter, { marginBottom: 20 }]}>
          <Text style={[styles.white]}>Forgot password? </Text>
          <TouchableOpacity><Text style={[styles.orange]}>Reset now</Text></TouchableOpacity>
        </View>
      </Content >
    </Container >
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000a10',
    flex: 1,
  },
  topBottomPadding: {
    paddingBottom: 20,
    paddingTop: 20
  },
  botttomPadding0: {
    paddingBottom: 0
  },
  botttomPadding10: {
    paddingBottom: 10
  },
  botttomPadding15: {
    paddingBottom: 15
  },
  botttomPadding20: {
    paddingBottom: 20
  },
  botttomPadding25: {
    paddingBottom: 25
  },
  botttomPadding40: {
    paddingBottom: 40
  },
  leftPadding20: {
    paddingLeft: 20
  },
  leftPadding30: {
    paddingLeft: 30
  },
  rightPadding30: {
    paddingRight: 30
  },
  row: {
    flexDirection: "row",
    alignItems: 'flex-start',
    paddingBottom: 15,
  },
  rowLeft: {
    flex: 1,
  },
  rowCenter: {
    flex: 1,
    alignItems: "center"
  },
  rowRight: {
    flex: 1,
  },
  selfAlignCenter: {
    alignSelf: "center"
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  outerCircle: {
    justifyContent: "center",
    borderRadius: 12,
    width: 24,
    height: 24,
    backgroundColor: '#ffc939',
  },
  innerCircle: {
    borderRadius: 10,
    width: 20,
    height: 20,
    margin: 2,
    backgroundColor: '#000a10'
  },
  itemGroup: {
    marginBottom: 20,
  },
  item: {
    borderRadius: 8,
    borderColor: 'transparent',
    backgroundColor: 'rgba(255,255,255,0.1)'
  },
  disabledButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
    borderRadius: 8,
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
    backgroundColor: 'rgba(255,201,57,0.3)',
    borderColor: 'rgba(255,201,57,1)',
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center'
  },
  white: {
    color: "#ffffff"
  },
  orange: {
    color: '#ffc939'
  },
  heading: {
    fontSize: 25,
    fontFamily: 'FiraSans-Bold',
  },
  subHeading: {
    fontSize: 23,
    fontFamily: 'FiraSans-Regular'
  },
  text: {
    fontSize: 17.3,
    fontFamily: 'FiraSans-Regular'
  },
});

export default LoginScreen;
