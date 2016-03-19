/**
 * Created by helion on 19/03/16.
 */
'use strict';
import React, {AppRegistry, Component, StyleSheet, Text, View, TabBarIOS, ListView, Dimensions} from "react-native";
import {merge} from "../theme";
import * as constants from "../constants";

const redux = require('react-redux');

const styles = merge({
	preview: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width
	}
});

class Vote extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={{flex: 1}}>
				<Text>VOTE</Text>
			</View>
		);
	}
}

const select = (state) => {
	return {
		Views: state.Views
	}
};

export default redux.connect(select)(Vote);