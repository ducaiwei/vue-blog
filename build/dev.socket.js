var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');
app.listen(80);
//存储在线人数
var onlineUsers = {};
function handler(req,res){
  fs.readFile(__dirname+'/index.html',function(err,data){
    if(err){
      res.writeHead(500);
      return res.end('Error laoding index.html');
    }
    res.writeHead(200);
    res.end(data);
  })
}
io.on('connection',function(socket){
  socket.emit('news',{ hello:'world' });
  socket.on('login',function(obj){
    socket.name = obj.userid;
    //向所有客户端广播用户加入
    io.emit('login', {onlineUsers:onlineUsers, onlineCount:onlineCount, user:obj,login:true});
    console.log(obj.username+'加入了聊天室');
  })
})