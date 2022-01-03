import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen'
import ProductDetailScreen from '../screens/shop/ProductDetailScreen'

import Colors from '../constants/Colors'

const ProductNavigator = createStackNavigator({
    ProductsOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTitleStyle: {
            fontFamily: 'open-sans-bold'
        },
        headerBackTitleStyle: {
            fontFamily: 'open-sans'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.accent
    }
})

export default createAppContainer(ProductNavigator)