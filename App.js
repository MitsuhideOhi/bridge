import './src/config/ReactotronConfig'
import config from './src/config'
import { Navigation } from 'react-native-navigation'
import { registerScreens } from './screens'
import createStore from './src/redux'
import { Provider } from 'react-redux'
import StartupActions from './src/redux/StartupRedux'

const store = createStore()

store.dispatch(StartupActions.startup())

registerScreens(store, Provider)

if (__DEV__) {
  console.disableYellowBox = !config.app.yellowBox
}

Navigation.startSingleScreenApp({
  screen: {
    screen: 'bridge.DemoScreen',
    title: 'Demo',
    navigatorStyle: {},
    navigatorButtons: {}
  }
})
