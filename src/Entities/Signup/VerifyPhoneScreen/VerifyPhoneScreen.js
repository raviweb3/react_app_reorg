import FormValidation from '../../../utils/FormValidation'
import React from 'react';
import { View, Text, Form, Item, Input, Button, DatePicker } from 'native-base';
import { StyleSheet } from 'react-native';

const VerifyPhoneScreen = () => {
    // Define your state schema
    const stateSchema = {
        phonenumber: { value: '', error: '' },
    };

    const validationStateSchema = {
        phonenumber: {
            required: true,
            validator: {
                regEx:{
                    value: /\b[0-9]{10}\b/,
                    error:"Invalid Phone Number Entered"
                }
            }
        },
    };

    function onSubmitForm(state) {
        alert(JSON.stringify(state, null, 2));
    }

    const { state,
        handleOnChange,
        handleOnSubmit,
        disableButton } = FormValidation(stateSchema, validationStateSchema, onSubmitForm);
    return (
        <View
            style={{
                height: '75%',
                alignContent: 'center'
            }}>
            <Text style={[{
                color: 'rgba(255,255,255,0.8)',
                fontSize: 15,
                fontFamily: 'FiraSans-Regular',
                alignSelf: 'center'
            }]}>Lets first connect with your phone, what phone</Text>
            <Text style={[styles.bottomPadding20, {
                color: 'rgba(255,255,255,0.8)',
                fontSize: 15,
                fontFamily: 'FiraSans-Regular',
                alignSelf: 'center'
            }]}>number are you using currently?</Text>
            <Form style={{
                paddingLeft: 30,
                paddingRight: 30,
            }}>
                <View style={styles.itemGroup}>
                    <Item style={styles.item}>
                        <Input
                            placeholder="Enter Phone Number"
                            value={state.phonenumber.value}
                            keyboardType='number-pad'
                            onChangeText={(phonenumber) => {
                                handleOnChange({
                                    name: "phonenumber",
                                    text: phonenumber
                                });
                            }}
                            placeholderTextColor='rgba(255,255,255,0.8)'
                            style={styles.inputItem} />
                    </Item>
                    <Text style={styles.errorText}>{state.phonenumber.error}</Text>
                </View>
            </Form>
            <View style={styles.submitButtonWrapper}>
                <Button onPress={handleOnSubmit}
                    disabled={disableButton}
                    style={disableButton ? styles.disabledButton : styles.enabledButton}>
                    <Text style={styles.enabledButtonText} uppercase={false}>Get Verification Code</Text>
                </Button>
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

export default VerifyPhoneScreen;