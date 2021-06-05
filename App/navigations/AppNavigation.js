import {createAppContainer} from 'react-navigation'
import {createStackNavigator, createSwitchNavigator} from 'react-navigation-stack'
import ListScreen from '@screens/ListScreen'
import SplashScreen from '../screens/SplashScreen'

const AppNavigation = createStackNavigator({
    Splash: {
        screen: SplashScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    List:{
        screen: ListScreen,
        navigationOptions: {
            headerShown: false,
        }
    },

})
export default createAppContainer(AppNavigation)