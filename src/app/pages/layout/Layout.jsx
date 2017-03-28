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
                    <h1>HELLO WORLD</h1>
                    <div className="row">
                        <div className="col-lg-6">
                            <a href="#/dashboard"> DASHBOARD</a>
                        </div>
                        <div className="col-lg-6">
                            <button>HELLO</button>
                        </div>

                    </div>

                </div>

                <Footer />
            </div>
        )
    }
});

export default Layout