import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { updateUserStatus } from '../redux/actions';
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from '../../styles';


const LoginUserForm = ({ navigation, user, onUserStatusChange }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const checkCredential = async () => {
        if (email.length > 0 && password.length > 0) {
            await fetch('https://michaelhefner.com/services/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
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
        <View style={[styles.formContainer, {}]}>
            <Text style={styles.header}>Log in</Text>
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
            <TouchableOpacity
                style={[styles.button, styles.shadow, styles.submitButton]}
                onPress={checkCredential}
            ><Text style={styles.text}>Submit</Text></TouchableOpacity>
            <Text style={{ color: "#fff" }}>User Name: {user.userName} Token: {user.token}</Text>

        </View>
    )
}

const mapStateToProps = state => ({
    user: state.user,
})

const mapDispatchToProps = dispatch => ({
    onUserStatusChange: text => dispatch(updateUserStatus(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginUserForm);