/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Amplify from '@aws-amplify/core'
import {Authenticator} from 'aws-amplify-react-native'
import awsconfig from '../aws-exports'

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
})


const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <Icon name="comments" size={30} color="#900" /> */}
      <Authenticator usernameAttributes="email" />
    </>
  );
};


export default App;
