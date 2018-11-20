/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


import {createStore} from 'redux';
import {Providers} from 'react-redux';

let store = createStore();

const App = () => {
    <Providers store={store}>
        
    </Providers>
}

AppRegistry.registerComponent(appName, () => App);
