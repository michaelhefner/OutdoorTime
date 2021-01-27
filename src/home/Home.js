import React from 'react';
import { View, Text, Button} from 'react-native';
import { connect } from 'react-redux';



const Home = ({navigation, user}) => {
    return (
        <View>
            <Text>Hello {user ? user.userName : null}</Text>
            <Button onPress={()=> navigation.navigate("Login", {name: "Login",})} title="Login"/>
        </View>
    )
}


const mapStateToProps = state => ({
    user: state.user,
});
export default connect(mapStateToProps, null)(Home);