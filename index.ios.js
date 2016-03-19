'use strict';
import React, {AppRegistry, Component, StyleSheet, Text, View} from "react-native";
import Router from "react-native-simple-router";
import {Provider} from "react-redux";
import * as Theme from "./app/theme";
import store from "./app/flux/store";
import * as Routes from "./app/routes";

const styles = Theme.merge({});

class SmartTVGuideRNA extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router
					firstRoute={{
						name: 'Dashboard',
						component: Routes.Dashbaord,
						headerStyle: {
							backgroundColor: 'black'
						}
					}}
				/>
			</Provider>
		);
	}
}

AppRegistry.registerComponent('SmartTVGuideRNA', () => SmartTVGuideRNA);
