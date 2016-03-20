/**
 * Created by helion on 19/03/16.
 */
'use strict';
import React, {AppRegistry, Component, StyleSheet, Text, View, TabBarIOS, ListView, TouchableHighlight} from "react-native";
import {merge} from "../theme";

const redux = require('react-redux');

const styles = merge({
	listItem: {
		padding: 20,
		backgroundColor: 'rgba(52,152,219,1)',
		borderBottomWidth: 1,
		borderBottomColor: 'white',
		flexDirection: 'row',
		alignItems: 'center'
	},
	button: {
		flex: 1,
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

class Presentation extends Component {
	constructor(props) {
		super(props);
	}

	onPressPresentation(action) {
		const {socket} = this.props;
		return ()=> {
			switch (action) {
				case 'weather':
					socket.sendEvent({});
					break;
				case 'twitter':
					socket.sendEvent({});
					break;
				case 'travel':
					socket.sendEvent({});
					break;
			}
		}
	}

	render() {
		return (
			<View style={{flex: 1, marginBottom: 48}}>
				<TouchableHighlight
					underlayColor={'transparent'}
					style={styles.button}
					underlayColor={'#2D85BF'}
					onPress={this.onPressPresentation('twitter')}
				>
					<Text style={styles.text}>Weather</Text>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor={'transparent'}
					style={styles.button}
					underlayColor={'#2D85BF'}
					onPress={this.onPressPresentation('travel')}
				>
					<Text style={styles.text}>Travel</Text>
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor={'transparent'}
					style={styles.button}
					underlayColor={'#2D85BF'}
					onPress={this.onPressPresentation('weather')}
				>
					<Text style={styles.text}>Twitter</Text>
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