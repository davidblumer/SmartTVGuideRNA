'use strict';
import React, {AppRegistry, Component, StyleSheet, Text, View} from "react-native";
import Router from "react-native-simple-router";

import * as Theme from './app/theme';
import * as Routes from './app/routes';

const styles = Theme.merge({});

class SmartTVGuideRNA extends Component {
	render() {
		return (
			<Router
				firstRoute={{
					name: 'Dashboard',
					component: Routes.Dashbaord,
					headerStyle: {
						backgroundColor: 'black'
					}
				}}
			/>
		);
	}
}

AppRegistry.registerComponent('SmartTVGuideRNA', () => SmartTVGuideRNA);
