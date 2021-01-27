import React from 'react';
import { View, Text, Button} from 'react-native';
import { connect } from 'react-redux';
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from '../../styles';


const Home = ({navigation, user}) => {
    return (
        <View>
            <Text>Hello {user ? user.userName : null}</Text>
            <TouchableOpacity
                style={[styles.button, styles.shadow, styles.submitButton]}
                onPress={()=> navigation.navigate("Login", {name: "Login",})}
            ><Text style={styles.buttonText}>Login</Text></TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.shadow, styles.submitButton]}
                onPress={()=> navigation.navigate("Register", {name: "Register",})}
            ><Text style={styles.buttonText}>Register</Text></TouchableOpacity>
        </View>
    )
}


const mapStateToProps = state => ({
    user: state.user,
});
export default connect(mapStateToProps, null)(Home);
