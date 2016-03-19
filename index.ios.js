'use strict';
import React, {AppRegistry, Component, StyleSheet, Text, View} from "react-native";

class SmartTVGuideRNA extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>SmartTVGuideRNA</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	}
});

AppRegistry.registerComponent('SmartTVGuideRNA', () => SmartTVGuideRNA);
