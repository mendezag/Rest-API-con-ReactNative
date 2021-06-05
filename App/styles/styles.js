import React from 'react'
import { StyleSheet} from 'react-native';

const SplashStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center', 
        justifyContent: 'center',
        paddingTop: 30
    },

    splashStyle: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    }
    
    })
const ListStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center', 
        justifyContent: 'center',
        paddingTop: 30
    },
    buttonSocialIcon: {
        marginBottom: 10,
        width: 250,
        height: 50,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#487eb0',
    },
    btntxt: {
        textAlign: 'center',
        fontSize: 17,
        color: '#f5f6fa',
        paddingVertical: 15,
    },
    flatStyle:{
        height:330,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginLeft: 50   
    },
    Title:{
        alignItems: 'center',
        fontSize: 22,
        color: '#00a8ff'
    }
})

export {SplashStyle, ListStyles}