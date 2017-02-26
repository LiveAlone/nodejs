var events = require('events');

var eventEmitter = new events.EventEmitter()

var eventHandler = function eventHandler() {
    console.log('event is logging');
    // 触发 data_received 事件 
    eventEmitter.emit('data_received');
}
eventEmitter.on('connection', eventHandler);

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function () {
    console.log('数据接收成功。');
});
eventEmitter.emit('connection');

console.log('finish all content');


