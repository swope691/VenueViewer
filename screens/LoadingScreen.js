import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    style
} from "react-native";
import firebase from 'firebase';



class LoadingScreen extends Component {
    componentDidMount(){
        this.checkIfLoggedIn();
    }
    
    checkIfLoggedIn = () =>{
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                this.props.navigation.navigate('ScreenOne');
            }
            else{
                this.props.navigation.navigate('LoginScreen');

            }
        })
    }
    render(){
        return(
            <View style={style.container}>
                <Text>LoadingScreen</Text>
            </View>
        )
    }
}

export default LoadingScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    }
});
