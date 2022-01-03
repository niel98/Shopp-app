import { React, useState } from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import AppLoadingProps from 'expo-app-loading'
import * as Font from 'expo-font'

import productReducer from './store/reducers/products'

import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  product: productReducer
})

const store = createStore(rootReducer)

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
