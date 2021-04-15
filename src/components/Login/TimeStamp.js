// import React from 'react';

// const key = 'guest',
//    secret = 'guest',
//    count = 0;
// let host = window.document.location.host.replace(/:.*/, '');
// const ws = new WebSocket(
//    'ws://stream.tradingeconomics.com/?client=' + key + ':' + secret
// );

// ws.onmessage = function (event) {
//    //console.log('Msg: ', event.data);
//    count++;
//    if (count >= 5) {
//       document.getElementById('data_cnt').innerHTML = '';
//       count = 0;
//    }

//    var div = document.createElement('div');
//    div.innerHTML = event.data;
//    document.getElementById('data_cnt').appendChild(div);
// };

// ws.onopen = function () {
//    console.log('Socket is Open!');
//    //subscripe to a topic:
//    var topic = 'calendar';
//    ws.send('{"topic": "subscribe", "to": "' + topic + '"}');
//    ws.send('{"topic": "subscribe", "to": "EURUSD:CUR"}');
// };

// function TimeStamp() {
//    return <div className='data_cnt'></div>;
// }

// export default TimeStamp;
