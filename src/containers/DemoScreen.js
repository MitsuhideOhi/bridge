// @flow
import React from 'react'
import { View, Text, requireNativeComponent, NativeModules, Button } from 'react-native'

const RNTAwesomeView = requireNativeComponent('RNTAwesomeView')
const RNTAwesomeViewModules = NativeModules.RNTAwesomeView

type Props = {
}

type State = {
}

class DemoScreen extends React.Component<Props, State> {

  render () {
    return (
      <View>
        <RNTAwesomeView style={{height: 200}} />
        <Text style={{textAlign: 'center'}}>Hello from1 Javascript</Text>
        <Button
          title='Trigger Awesome' onPress={
          () => RNTAwesomeViewModules.showAwesomeMessage('Awesome!')
        }
        />
      </View>
    )
  }
}

export default DemoScreen
