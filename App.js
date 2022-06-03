import React from "react";
import { Block, GalioProvider } from 'galio-framework';
import { NavigationContainer } from '@react-navigation/native';
import { Images, products, materialTheme } from './constants/';
import Screens from './navigation/Screens';

import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

import { enableScreens } from 'react-native-screens';
enableScreens();

const assetImages = [
  Images.Pro,
  Images.Profile,
  Images.Avatar,
  Images.Onboarding,
];

const store = ConfigureStore();

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    return (
      <Provider store={store}>
      <NavigationContainer>
        <GalioProvider theme={materialTheme}>
          <Block flex>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <Screens />
          </Block>
        </GalioProvider>
      </NavigationContainer>
      </Provider>
    );
  }
}



