/**
 * Created by helion on 19/03/16.
 */
'use strict';
import React, {AppRegistry, Component, StyleSheet, Text, View, TabBarIOS, Dimensions} from "react-native";
import * as Constants from "../constants";
import * as Routes from "../routes";
import * as ActionTypes from "../flux/actionTypes";
import {throttle} from "lodash";
import {merge} from "../theme";
import Camera from "react-native-camera";
import Socket from "../socket";
var Icon = require('react-native-vector-icons/FontAwesome');


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

	constructor(props) {
		super(props);

		const {dispatch} = props;
		
		this.socket = new Socket({
			tvFound: ()=> {
				dispatch({
					type: ActionTypes.BACKEND_TV_FOUND
				})
			},
			pairDisconnected: ()=> {
				dispatch({
					type: ActionTypes.BACKEND_PAIR_DISCONNECTED
				})
			}
		})
	}

	onPressTab(tab) {
		const {dispatch} = this.props;

		dispatch({
			type: ActionTypes.VIEWS_SELECT_TAB,
			tab
		})
	}

	onBarCodeRead(code) {
		const {dispatch} = this.props;
		this.socket.sendCode(code.data);
	}

	render() {
		const {Views, Backend} = this.props;
		if (Backend.connected) {
			return (
				<TabBarIOS
					barTintColor={'black'}
					tintColor={'white'}
				>
					<Icon.TabBarItemIOS
						title="Infos"
						selected={Views.tab === Constants.LIST}
						onPress={()=>this.onPressTab(Constants.LIST)}
						iconName={'info'}
					>
						<Routes.Infos socket={this.socket}/>
					</Icon.TabBarItemIOS>
					<Icon.TabBarItemIOS
						title="Remote"
						selected={Views.tab === Constants.REMOTE}
						onPress={()=>this.onPressTab(Constants.REMOTE)}
						iconName={'wifi'}
					>
						<Routes.Remote socket={this.socket}/>
					</Icon.TabBarItemIOS>
					<Icon.TabBarItemIOS
						title="Create vote"
						selected={Views.tab === Constants.VOTE}
						onPress={()=>this.onPressTab(Constants.VOTE)}
						iconName={'bar-chart'}
					>
						<Routes.CreateVote socket={this.socket}/>
					</Icon.TabBarItemIOS>
					<Icon.TabBarItemIOS
						title="Presentation"
						selected={Views.tab === Constants.PRESENTATION}
						onPress={()=>this.onPressTab(Constants.PRESENTATION)}
						iconName={'bar-chart'}
					>
						<Routes.Presentation socket={this.socket}/>
					</Icon.TabBarItemIOS>
				</TabBarIOS>
			);
		} else {
			return (
				<Camera ref={'camera'}
						style={styles.preview}
						aspect={Camera.constants.Aspect.Fill}
						onBarCodeRead={throttle(this.onBarCodeRead.bind(this), 3000)}
				>
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