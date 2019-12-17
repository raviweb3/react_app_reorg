import * as React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Container, Text, Header, Content, Input, Item, Form, Button, Label, Icon } from 'native-base';
import ImageSignInComponent from '../../assets/ImageSignInComponent';

const LoginScreen = () => {
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
          <ImageSignInComponent width={Dimensions.get('window').width} height={324} />
        </View>
        <View style={[styles.row, styles.selfAlignCenter, { height: 68, alignItems: 'center' }]}>
          <Text style={[styles.white, styles.heading]}>Enter your login details</Text>
        </View>
        <View style={[styles.leftPadding20, styles.rightPadding30, styles.botttomPadding15]}>
          <Form>
            <Item floatingLabel style={{ marginBottom: 20, borderRadius: 8, borderColor: 'transparent', backgroundColor: 'rgba(255,255,255,0.03)', flex: 1 }}>
              <Label style={[styles.leftPadding20]}>Enter Email ID</Label>
              <Input style={[styles.white, styles.leftPadding20]} />
              <Icon name='checkmark-circle' />
            </Item>
            <Item floatingLabel style={[{ marginBottom: 40, borderRadius: 8, borderColor: 'transparent', backgroundColor: 'rgba(255,255,255,0.03)' }]}>
              <Label style={[styles.leftPadding20]}>Enter Password</Label>
              <Input style={[styles.white, styles.leftPadding20]} />
            </Item>
            <Button disabled bordered style={[styles.text, styles.disabledButton, styles.justifyCenter, { borderRadius: 8, marginStart: 15 }]}>
              <Text style={styles.disabledButtonText}>Sign In</Text>
            </Button>
          </Form>
        </View>
        <View style={[styles.row, styles.justifyCenter]}>
          <Text style={[styles.white]}>Forgot password? </Text>
          <Text style={[styles.orange]}>Reset now</Text>
        </View>
      </Content>
    </Container>
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
  disabledButton: {
    backgroundColor: 'rgba(255,255,255,0.08)'
  },
  disabledButtonText: {
    fontSize: 20,
    color: 'rgba(255,255,255,0.4)',
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
