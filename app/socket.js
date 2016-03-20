/**
 * Created by helion on 19/03/16.
 */

window.navigator.userAgent = 'ReactNative';
const io = require('socket.io-client/socket.io');
const store = require('./flux/store');
var id = require("react-native-device-uuid");

const url = '';

class Socket {
	constructor(callbacks) {
		this.callbacks = callbacks;
		this.connect();
	}

	connect() {
		id.getUUID().then((uuid) => {
				this.socket = io('http://3b4fbd96.ngrok.com', {jsonp: false, query: `type=phone&udid=${uuid}`});
				this.bindSocketEvents();
			})
			.catch((error)=> {
				alert(error);
			});
	}

	bindSocketEvents() {
		this.socket.on('disconnect', ()=> {
			this.connect();
		});
		this.socket.on('tv_found', this.callbacks.tvFound);
		this.socket.on('pair_disconnected', this.callbacks.pairDisconnected);
	}

	sendEvent(event){
		this.socket.emit('send_event', event);
	}

	sendCode(code) {
		this.socket.emit('send_code', code);
	}
	
	sendMessage(message){
		this.socket.emit('send_message', message);
	}

	createVote(vote){
		this.socket.emit('create_vote', vote);
	}

	sendUp() {
		this.socket.emit('selection_up');
	}

	sendDown() {
		this.socket.emit('selection_down');
	}

	sendClick() {
		this.socket.emit('selection_click');
	}

	sendRemove() {
		this.socket.emit('selection_remove');
	}
}

module.exports = Socket;