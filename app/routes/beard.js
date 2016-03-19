/**
 * Created by helion on 19/03/16.
 */
'use strict';
import React, {AppRegistry, Component, StyleSheet, Text, View, TabBarIOS, ListView} from "react-native";
import {merge} from "../theme";

const redux = require('react-redux');

const styles = merge({});

class Beard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={{flex: 1}}>
			</View>
		);
	}
}

const select = (state) => {
	return {
		Views: state.Views
	}
};

export default redux.connect(select)(Beard);