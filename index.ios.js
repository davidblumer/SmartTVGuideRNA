'use strict';
import React, {AppRegistry, Component, StyleSheet, Text, View} from "react-native";
import Router from 'react-native-simple-router';

class Dashboard extends Component {
	render() {
		return <View><Text>Dashboard</Text></View>
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	}
});

AppRegistry.registerComponent('SmartTVGuideRNA', () => SmartTVGuideRNA);
