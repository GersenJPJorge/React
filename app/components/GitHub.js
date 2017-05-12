var React = require('react');
var SearchUser = require('./SearchUser');

//*var createReactClass = require('create-react-class');
//*var GitHub = createReactClass({

var GitHub = React.createClass({

    render: function() {
        return ( 
      <div className="contaniner">
      <SearchUser />
      </div>
    );
  }
});

module.exports = GitHub;