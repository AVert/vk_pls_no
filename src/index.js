import 'core-js/es6/map';
import 'core-js/es6/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vkui-connect';
import App from './App';
// import registerServiceWorker from './sw';

// Init VK App
connect.send('VKWebAppInit', {});
connect.send("VKWebAppGetAuthToken", {"app_id": 6925619, "scope": "friends,status"});

ReactDOM.render(<App />, document.getElementById('root'));
