var React = require('react');
var ReactDOM = require('react-dom');


var element = React.createElement('h1', null, ['Hello world', "other"],"foo",
"schtuff");
ReactDOM.render(element, document.getElementById('root'));
