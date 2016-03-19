/**
 * Created by helion on 19/03/16.
 */
'use strict';
import React, {AppRegistry, Component, StyleSheet, Text, View, TabBarIOS} from "react-native";
import * as Constants from "../constants";
import * as ActionTypes from "../flux/actionTypes";
import Infos from "./infos";

const redux = require('react-redux');

class Dashboard extends Component {

	onPressTab(tab) {
		const {dispatch} = this.props;

		dispatch({
			type: ActionTypes.VIEWS_SELECT_TAB,
			tab
		})
	}

	render() {
		const {Views} = this.props;
		return (
			<TabBarIOS>
				<TabBarIOS.Item
					title="Infos"
					selected={Views.tab === Constants.LIST}
					onPress={()=>this.onPressTab(Constants.LIST)}
				>
					<Infos/>
				</TabBarIOS.Item>
				<TabBarIOS.Item
					title="Remote"
					selected={Views.tab === Constants.REMOTE}
					onPress={()=>this.onPressTab(Constants.REMOTE)}
				>
					<View>
						<Text>REMOTE</Text>
					</View>
				</TabBarIOS.Item>
			</TabBarIOS>
		);
	}
}
const select = (state) => {
	console.log('select', state);
	return {
		Views: state.Views
	}
};

export default redux.connect(select)(Dashboard);