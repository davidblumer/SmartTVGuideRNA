'use strict';
import React, {AppRegistry, Component, StyleSheet, Text, View} from "react-native";
import Router from "react-native-simple-router";
import * as Theme from "./app/theme";

const styles = Theme.merge({});

class Dashboard extends Component {
	render() {
		const style = Theme.mix('container');
		console.log(style);
		return (
			<View style={style}>
				<Text>Dashboard</Text>
			</View>
		);
	}
}

class SmartTVGuideRNA extends Component {
	render() {
		return (
			<Router
				firstRoute={{
					name: 'Dashboard',
					component: Dashboard,
					headerStyle: {
						backgroundColor: 'black'
					}
				}}
			/>
		);
	}
}

AppRegistry.registerComponent('SmartTVGuideRNA', () => SmartTVGuideRNA);
