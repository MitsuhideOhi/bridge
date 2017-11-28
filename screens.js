import { Navigation } from 'react-native-navigation'

import DemoScreen from './src/containers/DemoScreen'

export function registerScreens (store, Provider) {
  Navigation.registerComponent('bridge.DemoScreen', () => DemoScreen, store, Provider)
}
