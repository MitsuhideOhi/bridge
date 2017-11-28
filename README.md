# Understanding React Native bridge

## Overview
Source used in presentation.
http://bit.ly/2hVg8SR

Since this is using React Native, you will need below command line tools have installed on your mac to run the app locally.

* `node`
* `react-native-cli`
* `npm`
* `yarn`
* `pods`
* `Xcode Command Line Tools`

Below link might help you to set this up.
https://facebook.github.io/react-native/docs/getting-started.html

## Run the App on iOS Simulator

### Install packages

```sh
cd bridge/
yarn install
cd ./ios
pod install
```
### Run the App

```sh
cd bridge/
npm run ios
```

## Troubleshooting
### If login action seems not responding
Please make sure your API mock server is running locally on Node.js
