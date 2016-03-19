/**
 * Created by helion on 19/03/16.
 */
'use strict';
import React, {AppRegistry, Component, StyleSheet, Text, View, TabBarIOS, ListView, Dimensions} from "react-native";
import {merge} from "../theme";
import * as constants from "../constants";
var Icon = require('react-native-vector-icons/FontAwesome');
const redux = require('react-redux');

const styles = merge({
	preview: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width
	},
	listItem: {
		padding: 20,
		backgroundColor: 'rgba(52,152,219,1)',
		borderBottomWidth: 1,
		borderBottomColor: 'white',
		flexDirection: 'row',
		alignItems: 'center'
	},
	listItemText: {
		color: 'white'
	},
	listItemHeader: {
		fontSize: 20
	},
	listItemContent: {
		fontSize: 12
	}
});

class Infos extends Component {
	constructor(props) {
		super(props);
		this.dataSource = new ListView.DataSource({rowHasChanged: (a, b)=>a !== b});
		this.data = [
			{type: constants.TWEET, title: 'Title', content: 'BLA BLA'},
			{type: constants.CHAT, title: 'Title', content: 'BLA BLA'},
			{type: constants.AD, title: 'Title', content: 'BLA BLA'},
			{type: constants.CHART, title: 'Title', content: 'BLA BLA'},
		];
	}

	renderRow(row) {
		return (
			<View style={styles.listItem}>
				<Icon name={row.type} size={30} color="#FFF"/>
				<View style={{flex: 1, marginLeft: 20}}>
					<Text style={[styles.listItemText, styles.listItemHeader]}>{row.title}</Text>
					<Text style={[styles.listItemText, styles.listItemContent]}>{row.content}</Text>
				</View>
			</View>
		);
	}

	render() {
		return (
			<View style={{flex: 1}}>
				<ListView
					dataSource={this.dataSource.cloneWithRows(this.data)}
					renderRow={this.renderRow.bind(this)}
				/>
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