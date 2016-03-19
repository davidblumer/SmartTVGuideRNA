/**
 * Created by helion on 19/03/16.
 */
'use strict';
import React, {AppRegistry, Component, StyleSheet, Text, View, TabBarIOS, Dimensions} from "react-native";
import * as Constants from "../constants";
import * as Routes from "../routes";
import * as ActionTypes from "../flux/actionTypes";
import {merge} from "../theme";
import Camera from "react-native-camera";

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

class Dashboard extends Component {

	onPressTab(tab) {
		const {dispatch} = this.props;

		dispatch({
			type: ActionTypes.VIEWS_SELECT_TAB,
			tab
		})
	}

	render() {
		const {Views, Backend} = this.props;
		if (Backend.connected) {
			return (
				<TabBarIOS>
					<TabBarIOS.Item
						title="Infos"
						selected={Views.tab === Constants.LIST}
						onPress={()=>this.onPressTab(Constants.LIST)}
					>
						<Routes.Infos/>
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
		} else {
			return (
				<Camera ref={'camera'}
						style={styles.preview}
						aspect={Camera.constants.Aspect.Fill}>
					<Text style={{backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', padding: 5}}>Please Scan the QR Code on your Smart TV</Text>
				</Camera>
			);
		}
	}
}
const select = (state) => {
	console.log('select', state);
	return {
		Views: state.Views,
		Backend: state.Backend
	}
};

export default redux.connect(select)(Dashboard);