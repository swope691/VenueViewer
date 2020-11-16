import React, {Component} from "react";
import {
    View,
    Text,
    StyleSheet,
    style, ActivityIndicator
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
            <View style={styles.container}>
                <ActivityIndicator size="large"/>
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
