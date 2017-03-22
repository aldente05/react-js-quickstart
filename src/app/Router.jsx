import React from 'react'
import {render} from 'react-dom'
import {Router} from 'react-router'

import Routes from './Routes.jsx';

var rootInstance = render((
    <Router>
        {Routes}
    </Router>
), document.getElementById('react-root'));

if (module.hot) {
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
        getRootInstances: function () {
            // Help React Hot Loader figure out the root component instances on the page:
            return [rootInstance];
        }
    });
}