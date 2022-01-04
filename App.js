import { React, useState } from 'react'
import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import AppLoadingProps from 'expo-app-loading'
import * as Font from 'expo-font'

import productReducer from './store/reducers/products'
import cartReducer from './store/reducers/cart'

import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer
})

const store = createStore(rootReducer, composeWithDevTools())

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (!fontsLoaded) {
    return <AppLoadingProps 
    startAsync={fetchFonts}
    onFinish={() => setFontsLoaded(true)}
    onError={(err) => console.log(err)}
    />
  }

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
