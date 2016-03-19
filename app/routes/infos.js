/**
 * Created by helion on 19/03/16.
 */
'use strict';
import React, {AppRegistry, Component, StyleSheet, Text, View, TabBarIOS} from "react-native";
import * as Constants from "../constants";
import * as ActionTypes from "../flux/actionTypes";

const redux = require('react-redux');

class Infos extends Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<Text>LIST</Text>
				<Text>LIST</Text>
				<Text>LIST</Text>
				<Text>LIST</Text>
				<Text>LIST</Text>
			</View>
		);
	}
}
const select = (state) => {
	return {
		Views: state.Views
	}
};

export default redux.connect(select)(Infos);