import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Text, View, TextInput } from 'react-native';
import { updateUserStatus } from '../redux/actions';
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from '../../styles';


const Register = ({ navigation, user, onUserStatusChange }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [token, setToken] = useState('');
    const checkCredential = async () => {
        if (email.length > 0 && password.length > 0) {
            await fetch('https://michaelhefner.com/services/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword,
                }),
            })
                .then((res) => {
                    if (res.status !== 200) {
                        clearStoreInfo();

                        return null;
                    }
                    return res.json()
                })
                .then((response) => response.token)
                .then((res) => {
                    onUserStatusChange({ isLoggedIn: true, token: res, userName: email });
                    clearInputFields();
                })
                .catch((err) => {
                    clearStoreInfo();
                    clearInputFields();
                });
            navigation.goBack();
        }
    }
    const clearInputFields = () => {
        setEmail('');
        setPassword('');
    }
    const clearStoreInfo = () => onUserStatusChange({ isLoggedIn: false, token: '', userName: '' });
    return (
        <View style={styles.container}>
            <View style={[styles.formContainer, {}]}>
                <Text style={styles.header}>Register</Text>
                <Text style={styles.inputLabel}>
                    Email
            </Text>
                <TextInput
                    style={[styles.inputText, styles.shadow]}
                    placeholder="User Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <Text style={styles.inputLabel}>
                    Password
            </Text>
                <TextInput
                    style={[styles.inputText, styles.shadow,]}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <Text style={styles.inputLabel}>
                    Confirm Password
            </Text>
                <TextInput
                    style={[styles.inputText, styles.shadow,]}
                    placeholder="ConfirmPassword"
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                />
                <TouchableOpacity
                    style={[styles.button, styles.shadow, styles.submitButton]}
                    onPress={checkCredential}
                ><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
            </View>
        </View>
    )

}

const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = dispatch => ({
    onUserStatusChange: text => dispatch(updateUserStatus(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);