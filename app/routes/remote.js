/**
 * Created by helion on 19/03/16.
 */
'use strict';
import React, {AppRegistry, Component, StyleSheet, Text, View, TabBarIOS, TouchableHighlight} from "react-native";
import {merge} from "../theme";
const redux = require('react-redux');

const styles = merge({
	button: {
		flex: 1,
		borderBottomWidth: 0,
		borderBottomColor: 'white',
		backgroundColor: 'rgba(52,152,219,1)',
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 30,
		color: 'white',
		fontWeight: 'bold'
	}
});

class Remote extends Component {
	onPressUp() {
		const {socket} = this.props;
		socket.sendUp();
	}
	onPressDown() {
		const {socket} = this.props;
		socket.sendDown();
	}
	onPressClick() {
		const {socket} = this.props;
		socket.sendClick();
	}
	onPressRemove() {
		const {socket} = this.props;
		socket.sendRemove();
	}

	render() {
		return (
			<View style={{flex: 1, marginBottom: 49}}>
				<TouchableHighlight
					style={styles.button}
					onPress={this.onPressUp.bind(this)}
					underlayColor={'#2D85BF'}
				>
					<Text style={styles.text}>UP</Text>
				</TouchableHighlight>
				<TouchableHighlight
					style={styles.button}
					onPress={this.onPressClick.bind(this)}
					underlayColor={'#2D85BF'}
				>
					<Text style={styles.text}>CLICK</Text>
				</TouchableHighlight>
				<TouchableHighlight
					style={styles.button}
					onPress={this.onPressRemove.bind(this)}
					underlayColor={'#2D85BF'}
				>
					<Text style={styles.text}>REMOVE</Text>
				</TouchableHighlight>
				<TouchableHighlight
					style={styles.button}
					onPress={this.onPressDown.bind(this)}
					underlayColor={'#2D85BF'}
				>
					<Text style={styles.text}>DOWN</Text>
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

export default redux.connect(select)(Remote);