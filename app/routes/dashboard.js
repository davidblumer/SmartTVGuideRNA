/**
 * Created by helion on 19/03/16.
 */
'use strict';
import React, {AppRegistry, Component, StyleSheet, Text, View} from "react-native";

import * as Theme from '../theme';

export default class Dashboard extends Component {
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