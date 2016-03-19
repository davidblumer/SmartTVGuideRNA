'use strict';
import React, {AppRegistry, Component, StyleSheet, Text, View, TabBarIOS} from "react-native";
import Router from "react-native-simple-router";
import {Provider} from "react-redux";
import store from "./app/flux/store";
import * as Routes from "./app/routes";

// import socket from './app/socket';

class SmartTVGuideRNA extends Component {
	//
	render() {
		return (
			<Provider store={store}>
				<Router
					firstRoute={{
						name: 'SmartGuide',
						component: Routes.Dashboard,
						headerStyle: {
							backgroundColor: 'rgba(41, 128, 184, 1)'
						}
					}}
				/>
			</Provider>
		);
	}
}

AppRegistry.registerComponent('SmartTVGuideRNA', () => SmartTVGuideRNA);
