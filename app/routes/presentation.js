/**
 * Created by helion on 19/03/16.
 */
'use strict';
import React, {AppRegistry, Component, StyleSheet, Text, View, TabBarIOS, ListView, TouchableHighlight} from "react-native";
import {merge} from "../theme";

const redux = require('react-redux');

const styles = merge({});

class Presentation extends Component {
	constructor(props) {
		super(props);
	}

	onPressPresentation(action) {
		return ()=> {

		}
	}

	render() {
		return (
			<View style={{flex: 1}}>
				<TouchableHighlight
					underlayColor={'transparent'}
					style={{backgroundColor: 'red', padding: 10}}
					onPress={this.onPressPresentation('start')}
				>
					<Text>Start</Text>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor={'transparent'}
					style={{backgroundColor: 'red', padding: 10}}
					onPress={this.onPressPresentation('start')}
				>
					<Text>Start</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const select = (state) => {
	return {
		Views: state.Views
	}
};

export default redux.connect(select)(Presentation);