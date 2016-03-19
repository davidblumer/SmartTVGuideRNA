/**
 * Created by helion on 19/03/16.
 */

window.navigator.userAgent = 'ReactNative';
const io = require('socket.io-client/socket.io');
const store = require('./flux/store');
var id = require("react-native-device-uuid");
import * as ActionTypes from "./flux/actionTypes";


class Socket {
	constructor(callbacks) {
		this.callbacks = callbacks;
		id.getUUID().then((uuid) => {
				this.socket = io('http://3b4fbd96.ngrok.com', {jsonp: false, query: `type=phone&udid=${uuid}`});
				this.bindSocketEvents();
			})
			.catch((error)=> {
				alert(error);
			});
	}

	bindSocketEvents() {
		this.socket.on('tv_found', this.callbacks.tvFound);
	}

	sendCode(code) {
		this.socket.emit('send_code', code);
	}
}

module.exports = Socket;