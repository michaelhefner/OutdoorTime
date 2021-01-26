import React from 'react';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from './actions';
import LoginUserForm from './LoginUserForm';
import { Text, View } from 'react-native';
import styles from '../styles';


const User = ({ user}) => {
    return (
        <View style={styles.container}>
            <LoginUserForm />
            {user.isLoggedIn ? <Text style={{ color: '#fff' }}>logged in</Text> : <Text style={{ color: '#fff' }}>Not logged in</Text>}
        </View>
    )
}

const mapStateToProps = state => ({
    user: state.user,
})
const mapDispatchToProps = dispatch => ({
    onLoginPressed: text => dispatch(loginUser(text)),
    onLogoutPressed: text => dispatch(logoutUser(text)),
})
export default connect(mapStateToProps, mapDispatchToProps)(User);