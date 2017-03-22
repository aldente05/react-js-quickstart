import React from 'react'
import UserStore from '../stores/UserStore'


let LoginInfo = React.createClass({
    getInitialState: function () {
        return {}
    },
    componentWillMount: function () {
        UserStore.listen(function (data) {
            console.log(data);
            this.setState(data)
        }.bind(this))
    },
    render: function () {
        return (

            <div className="login-info">
			    <span>
			            <img src={this.state.picture} alt="me"
                             className="online"/><span>{ this.state.username }</span><i className="fa fa-angle-down"/>
			     </span>
            </div>
        )
    }
});

export default LoginInfo