/**
 * Created by helion on 19/03/16.
 */
import React, {StyleSheet} from "react-native";
import {merge} from 'lodash';

const style = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	red: {
		backgroundColor: 'red'
	}
};


module.exports = {
	merge: (localStyle)=> {
		return StyleSheet.create(merge({}, style, localStyle));
	},
	mix: (props)=> {
		let p = props.split(',');
		let newStyle = {};
		for (var x = 0; x < p.length; x++) {
			newStyle = merge(newStyle, style[p[x]]);
		}
		return newStyle;
	}
};