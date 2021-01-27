
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';


export default styles = StyleSheet.create({
    nav: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 25,
        marginTop: 'auto',
        paddingBottom: 50,
    },
    homeContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
    },
    button: {
        backgroundColor: 'rgba(255,255,255, .85)',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingVertical: 5,
        paddingHorizontal: 20,
        margin: 5,
    },
    shadow: {
        shadowColor: '#000',
        shadowRadius: 15,
        shadowOpacity: .5,
        shadowOffset: {width: 3, height: 3},
    },
    text:{
        fontSize:32,
        alignSelf: 'center',
        padding: 5,
        color: 'rgba(0,0,0,1)'
    },
    buttonText:{
        fontSize:32,
        alignSelf: 'center',
        padding: 5,
        color: 'rgba(255,255,255, .8)'
    },
    centerAll: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
    },
    submitButton: {
        backgroundColor: 'rgba(25, 150, 25, .8)',
        color: "#fff",
    },
    inputText: {
        // backgroundColor: 'rgba(0,0,0, .1)',
        backgroundColor: 'rgba(255,255,255, .9)',
        borderRadius: 10,
        margin: 10,
        fontSize: 32,
        textAlign: 'left',
        height: 50,
        padding: 6,
        minWidth: '100%',
        color: 'rgba(5, 5, 5, .7)',
    },
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    header: {
        color: '#fff',
        fontSize: 48,
    },
    inputLabel: {
        fontSize: 24,
        color: '#fff',
        alignSelf: 'flex-start',
    },
    formContainer:{
        padding: 30,
    },
    container: {
        backgroundColor: 'rgba(25, 25, 25, .8)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
    }
});

