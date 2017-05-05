import React from 'react'

import Header from './Header.jsx'
import Footer from './Footer.jsx'

// import UserActions from '../../../components/user/actions/UserActions.js'

let Layout = React.createClass({
    // componentWillMount: function () {
    //     UserActions.init();
    // },

    render: function () {
        return (
            <div>
                <Header/>

                <div id="main" role="main">
                    {this.props.children}
                </div>

                <Footer />
            </div>
        )
    }
});

export default Layout