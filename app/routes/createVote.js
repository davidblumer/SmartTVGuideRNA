/**
 * Created by helion on 19/03/16.
 */
'use strict';
import React, {AppRegistry, Component, StyleSheet, Text, View, TabBarIOS, TextInput, ListView, Dimensions, TouchableHighlight} from "react-native";
import {merge} from "../theme";
import * as ActionTypes from "../flux/actionTypes";

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

class CreateVote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question: ''
		};
		this.dataSource = new ListView.DataSource({rowHasChanged: (a, b)=>a !== b});
	}

	renderRow(row) {
		return (
			<View style={{flex: 1, backgroundColor: 'red'}}>
				<TextInput
					style={{height: 40}}
					placeholder={'Your Question'}
					onChangeText={(text)=>{
						let x = {};
						x['question'+row.index] = text;
						this.setState(x);
					}}
				/>
			</View>
		)
	}

	onAddAnswer() {
		const {dispatch} = this.props;
		dispatch({
			type: ActionTypes.CREATEVOTE_ADD_ANSWER
		})
	}

	onSave() {
		const {dispatch} = this.props;
		dispatch({
			type: ActionTypes.CREATEVOTE_ADD_ANSWER
		})
	}

	render() {
		const {CreateVote} = this.props;

		return (
			<View style={{flex: 1}}>
				<TextInput
					placeholder={'Your Question'}
					onChangeText={(text)=>this.setState({question: text})}
				/>
				<TouchableHighlight
					style={{padding: 20, backgroundColor: 'rgba(52,152,219,1)'}}
					onPress={this.onAddAnswer.bind(this)}
				>
					<Text style={{color: 'white'}}>Add answer</Text>
				</TouchableHighlight>
				<TouchableHighlight
					style={{padding: 20, backgroundColor: 'rgba(52,152,219,1)'}}
					onPress={this.onSave.bind(this)}
				>
					<Text style={{color: 'white'}}>Save</Text>
				</TouchableHighlight>
				<ListView
					dataSource={this.dataSource.cloneWithRows(CreateVote.answers)}
					renderRow={this.renderRow.bind(this)}
				/>
			</View>
		);
	}
}

const select = (state) => {
	return {
		Views: state.Views,
		CreateVote: state.CreateVote
	}
};

export default redux.connect(select)(CreateVote);