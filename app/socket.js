/**
 * Created by helion on 19/03/16.
 */

const uuid = require('node-uuid');

window.navigator.userAgent = 'ReactNative';
const io = require('socket.io-client/socket.io');
const socket = io('http://3b4fbd96.ngrok.com', {jsonp: false, query: `type=phone`});