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
					fetch("http://bims.ngrok.com/api/weather/Pasadena")
						.then((res)=>res.json())
						.then((response)=> {
							console.log(response);
							var result = {
								date: new Date(),
								icon: 'cloud',
								link: '',
								text: 'It will be a sunny day',
								title: 'Pasadena',
								type: 'weather'
							};
							try {
								result.text = `It will be ${response.city.forecast["2016-03-20"]['17:00'].w_txt}`;
							} catch (ignore) {
							}
							socket.newContent(result);
						});
					break;
				case 'twitter':
					fetch("http://bims.ngrok.com/api/tweets/x")
						.then((res)=>res.json())
						.then((response)=> {
							console.log(response);
							var result = {
								date: new Date(),
								icon: 'tweet',
								link: '',
								text: 'Bazinga!',
								title: 'Jim Parsons',
								type: 'twitter'
							};
							try {
								var creator = _.chain(response).sample().value();
								var creatorName = _.keys(creator)[0];
								var text = _.sample(_.sample(creator)).text;
								result.title = creatorName;
								result.text = text;
							} catch (ignore) {
							}
							socket.newContent(result);
						});
					break;
				case 'travel':
					fetch("http://bims.ngrok.com/api/travel/match", {
						method: 'POST',
						body: JSON.stringify({
							"lat": "48.1909418",
							"lon": "11.651555",
							"country": "UNITED STATES"
						})
					})
						.then((res)=>res.json())
						.then((response)=> {
							console.log(response);
							var result = {
								date: new Date(),
								icon: 'travel',
								link: '',
								text: 'Munich',
								title: 'Best Price Hotel',
								type: 'travel'
							};
							try {
								result.text = response.bestPriceHotel.comvelHotel.hotelName;
							} catch (ignore) {
							}
							socket.newContent(result);
						});
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
					onPress={this.onPressPresentation('weather')}
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
					onPress={this.onPressPresentation('twitter')}
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