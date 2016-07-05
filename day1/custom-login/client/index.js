var React = require('react');
var ReactDOM = require('react-dom');

var MyForm = React.createClass({
  render: function() {
    // Update this function and make this form customizable.
    // Read values with {this.props.action}, {this.props.method} and
    // {this.props.submitLabel}
    // YOUR CODE HERE
    return <form></form>;
  }
});

ReactDOM.render(<MyForm action="/test" method="post" submitLabel="Test submit"/>,
                document.getElementById('root'));
