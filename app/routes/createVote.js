/**
 * Created by helion on 19/03/16.
 */
'use strict';
import React, {AppRegistry, Component, StyleSheet, Text, View, TabBarIOS, TextInput, ListView, Dimensions, TouchableHighlight} from "react-native";
import {merge} from "../theme";
import * as ActionTypes from "../flux/actionTypes";
import * as Constants from "../constants";

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
		const {dispatch} = this.props;
		return (
			<View style={{flex: 1}}>
				<TextInput
					style={{height: 40, padding: 10}}
					placeholder={'Your answer'}
					onChangeText={(text)=>{
						let x = {};
						x['answer'+row.index] = text;
						this.setState(x);
					}}
					onSubmitEditing={()=>{
						dispatch({
							type: ActionTypes.CREATEVOTE_SET_ANSWER,
							answer: { index: row.index, text: this.state['answer' + row.index]}
						})
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
		const {dispatch, CreateVote, socket} = this.props;

		const options = _.map(CreateVote.answers, 'text');
		const vote = {
			title: CreateVote.question,
			options
		};

		socket.createVote(vote);

		dispatch({
			type: ActionTypes.CREATEVOTE_SAVE_VOTE,
			vote
		});

		this.refs.question.setNativeProps({text: ''});
	}

	onSelect(row, section, index) {
		const {dispatch, CreateVote, socket} = this.props;
		return ()=> {
			socket.vote({
				id: CreateVote.vote.pollId,
				optionIndex: index
			});
		}
	}

	renderAnswer(row, section, index) {
		return (
			<TouchableHighlight
				style={{padding: 10, flex: 1}}
				onPress={this.onSelect(row, section, index).bind(this)}
			>
				<Text style={{color: 'white', fontSize: 16}}>{row.title}</Text>
			</TouchableHighlight>
		);
	}

	render() {
		const {dispatch, CreateVote, Views, socket} = this.props;

		if (Views.subView === Constants.CREATEVOTE) {
			return (
				<View style={{flex: 1}}>
					<TextInput
						ref={'question'}
						placeholder={'Your Question'}
						style={{height: 40, padding: 10, backgroundColor: 'white'}}
						onChangeText={(text)=>this.setState({question: text})}
						onSubmitEditing={()=>{
							dispatch({
								type: ActionTypes.CREATEVOTE_SET_QUESTION,
								question: this.state.question
							})
						}}
					/>
					<TouchableHighlight
						style={{padding: 10, backgroundColor: 'rgba(52,152,219,1)'}}
						onPress={this.onAddAnswer.bind(this)}
					>
						<Text style={{color: 'white'}}>Add answer</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={{padding: 10, backgroundColor: 'rgba(52,152,219,1)'}}
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
		} else {
			return (
				<View style={{flex: 1}}>
					<Text style={{padding: 10, fontWeight: 'bold', fontSize: 24, color: 'white'}}>{CreateVote.vote.title}</Text>
					<ListView
						dataSource={this.dataSource.cloneWithRows(CreateVote.vote.options)}
						renderRow={this.renderAnswer.bind(this)}
					/>
				</View>
			);
		}
	}
}

const select = (state) => {
	return {
		Views: state.Views,
		CreateVote: state.CreateVote
	}
};

export default redux.connect(select)(CreateVote);