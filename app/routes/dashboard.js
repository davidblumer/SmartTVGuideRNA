/**
 * Created by helion on 19/03/16.
 */
'use strict';
import React, {AppRegistry, Component, StyleSheet, Text, View} from "react-native";
import {mix} from "../theme";
import * as ActionTypes from "../flux/actionTypes";

const redux = require('react-redux');

class Dashboard extends Component {
	componentWillMount() {
		const { dispatch } = this.props;
		dispatch({
			type: ActionTypes.FOO
		});
	}

	render() {
		return (
			<View style={mix('container')}>
				<Text>Please scan the QR Code on your Smart TV</Text>
			</View>
		);
	}
}

export default redux.connect((state)=> {
	return {}
})(Dashboard);