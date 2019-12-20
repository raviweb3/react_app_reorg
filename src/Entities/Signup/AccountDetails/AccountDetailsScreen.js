import FormValidation from '../../../utils/FormValidation'
import React from 'react';
import { View, Text, Form, Item, Input, Button, DatePicker } from 'native-base';
import { StyleSheet } from 'react-native';

const AccountDetailsScreen = () => {
    // Define your state schema
    const stateSchema = {
        fullname: { value: '', error: '' },
        date: { value: new Date(), error: '' },
        email: { value: '', error: '' },
    };

    const validationStateSchema = {
        date: {
            required: true,
            validator: {
                type: {
                    value: "date",
                    error: "Invalid type"
                }
            }
        },
        email: {
            required: true,
            validator: {
                required: true,
                regEx: {
                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    error: 'Invalid email format.'
                },
            },
        },
        fullname: {
            required: true,
            validator: {
                regEx: {
                    value: /^[a-zA-Z. ]+$/,
                    error: 'Invalid format.'
                },
                minLength: {
                    value: 3,
                    error: 'Please enter atleast 3 letters '
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
        <View
            style={{
                height: '75%'
            }}>
            <Text style={[styles.bottomPadding20, {
                color: 'rgba(255,255,255,0.8)',
                fontSize: 15,
                fontFamily: 'FiraSans-Regular',
                alignSelf: 'center'
            }]}>Please enter your full legal information</Text>
            <Form style={{
                paddingLeft: 30,
                paddingRight: 30,
            }}>
                <View style={styles.itemGroup}>
                    <Item style={styles.item}>
                        <Input
                            placeholder="Enter Full Name"
                            value={state.fullname.value}
                            onChangeText={(fullname) => {
                                handleOnChange({
                                    name: "fullname",
                                    text: fullname
                                });
                            }}
                            placeholderTextColor='rgba(255,255,255,0.8)'
                            style={styles.inputItem} />
                    </Item>
                    <Text style={styles.errorText}>{state.fullname.error}</Text>
                </View>
                <View style={styles.itemGroup}>
                    <Item style={styles.item}>
                        <DatePicker
                            defaultDate={new Date()}
                            maximumDate={new Date()}
                            locale={"en"}
                            name='date'
                            placeHolderText="Enter Date of Birth (DD/MM/YYYY)"
                            textStyle={styles.inputItem}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={(date) => {
                                handleOnChange({
                                    name: "date",
                                    text: date
                                });
                            }}
                        />
                    </Item>
                    <Text style={styles.errorText}>{state.date.error}</Text>
                </View>
                <View style={[styles.itemGroup, styles.bottomPadding200]}>
                    <Item style={styles.item}>
                        <Input
                            placeholder="Enter Email ID"
                            placeholderTextColor='rgba(255,255,255,0.8)'
                            keyboardType='email-address'
                            value={state.email.value}
                            onChangeText={(email) => {
                                handleOnChange({
                                    name: "email",
                                    text: email
                                });
                            }}
                            style={styles.inputItem} />
                    </Item>
                    <Text style={styles.errorText}>{state.email.error}</Text>
                </View>
            </Form>
            <View style={styles.submitButtonWrapper}>
                <Button onPress={handleOnSubmit}
                    disabled={disableButton}
                    style={disableButton ? styles.disabledButton : styles.enabledButton}>
                    <Text style={styles.enabledButtonText} uppercase={false}>Submit Details</Text>
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

export default AccountDetailsScreen;