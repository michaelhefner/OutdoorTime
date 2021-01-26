import React, { useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from './actions';
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from '../styles';


const LoginUserForm = ({ user, onLoginPressed }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const checkCredential = () => {

        if (email.length > 0 && password.length > 0) {

            fetch('https://michaelhefner.com/services/auth/login', {
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
                if(res.status === 401){
                    onLoginPressed(false);
                    return null;
                }
                return res.json()
            })
            .then((response) => response.token)
            .then((res) => {
                    onLoginPressed(true);
                setEmail('');
                setPassword('');
                // navigation.navigate('Home', {name: 'Home'});
            })
            .catch((err) => {
                onLoginPressed(false);
                setEmail('');
                setPassword('');

            });
        }
    }
    return (
        <View style={[styles.container, {}]}>
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
            <Text>{email & ' ' & password}</Text>

        </View>
    )
}

const mapStateToProps = state => ({
    user: state.user,
})

const mapDispatchToProps = dispatch => ({
    onLoginPressed: text => dispatch(loginUser(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginUserForm);