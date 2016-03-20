/**
 * Created by helion on 19/03/16.
 */
'use strict';
import React, {AppRegistry, Component, StyleSheet, Text, TextInput, View, TabBarIOS, ListView, Dimensions} from "react-native";
import {merge} from "../theme";
import * as constants from "../constants";
import * as ActionTypes from "../flux/actionTypes";
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
		this.state = {
			message: ''
		};
		
		this.dataSource = new ListView.DataSource({rowHasChanged: (a, b)=>a !== b});
		this.data = [
			{type: constants.TWEET, title: 'Title', content: 'BLA BLA'},
			{type: constants.CHAT, title: 'Title', content: 'BLA BLA'},
			{type: constants.WEATHER, title: 'Title', content: 'BLA BLA'},
			{type: constants.AD, title: 'Title', content: 'BLA BLA'}
		];
	}

	renderRow(row) {

		if (row.type === constants.CHAT) {
			return (
				<View style={styles.listItem}>
					<Icon name={row.type} size={30} color="#FFF"/>
					<View style={{flex: 1, marginLeft: 20}}>
						<Text style={[styles.listItemText, styles.listItemHeader]}>{row.content}</Text>
					</View>
				</View>
			);
		} else {
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
	}

	submitChat() {
		const {dispatch} = this.props;
		dispatch({
			type: ActionTypes.CHAT_ADD_MESSAGE,
			message: {
				type: constants.CHAT, title: 'Title',
				content: this.state.message || ''
			}
		});

		this.props.socket.sendMessage({message: this.state.message});
		this.setState({message: ''});
		this.refs.input.setNativeProps({text: ''});
	}

	render() {
		const {Chat} = this.props;
		return (
			<View style={{flex: 1}}>
				<TextInput
					ref={'input'}
					style={{height: 40, padding: 10}}
					placeholder={'Chat'}
					onChangeText={(text)=>this.setState({message: text})}
					onSubmitEditing={this.submitChat.bind(this)}
				/>
				<ListView
					dataSource={this.dataSource.cloneWithRows([...Chat.messages, ...this.data])}
					renderRow={this.renderRow.bind(this)}
				/>
			</View>
		);
	}
}

const select = (state) => {
	return {
		Views: state.Views,
		Chat: state.Chat
	}
};

export default redux.connect(select)(Infos);