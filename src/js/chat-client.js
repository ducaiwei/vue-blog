import io from 'socket.io-client';
const CHAT_CLIENT = {
	socket: null,
	userName:'',
	connect:function(){//链接
		var _socket = io('ws://localhost');
		_socket.on('news',function(data){
			console.log(data);
		})
		this.socket = _socket;
	}
};
export { CHAT_CLIENT };