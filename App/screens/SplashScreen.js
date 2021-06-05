import React, { Component } from 'react'
import { View, Text } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { SplashStyle } from '@styles/styles'


export default class SplashScreen extends Component {

    goToScreen(routeName) {
        this.props.navigation.navigate(routeName)
    }
    componentDidMount() {
        setTimeout(() => {
            this.goToScreen('List')
        }, 3000, this)
    }

    render() {
        return (
            <View style={SplashStyle.container}>
                <View style={SplashStyle.splashStyle}>
                    <Animatable.Image
                        animation="pulse"
                        easing="ease-out"
                        iterationCount="infinite"
                        style={{
                            width: 300,
                            height: 110,
                            //margin: 10,
                        }}
                        source={require('@recursos/image/pokeSplash.png')}
                    />
                </View>

            </View>
        )
    }
}