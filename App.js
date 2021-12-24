import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {Persistor, Store} from './src/store/Store';
import {PersistGate} from 'redux-persist/lib/integration/react';

import Root from './src/navigation/Root';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
}
