var scripts = {
    "aliases" : {

        "react/lib": "/node_modules/react/lib",
        "react": "/node_modules/react/dist/react.min.js",
        "redux": "/node_modules/redux/dist/redux.min.js",
        "react-dom": "/node_modules/react-dom/dist/react-dom.min.js",
        "react-bootstrap": "/node_modules/react-bootstrap/dist/react-bootstrap.min.js",
        "react-router": "/node_modules/react-router/umd/ReactRouter.min.js",

        //"lodash": "/bower_components/lodash/dist/lodash.js",

        "jquery": "/bower_components/jquery/dist/jquery.min.js",

        "bootstrap": "/bower_components/bootstrap/dist/js/bootstrap.min.js"

    },
    "chunks": {
        "vendor": [
            'react',
            'react-dom',
            'react-bootstrap',
            'react-router',
            "jquery"
        ]

    },
    noParse: [
        "jquery"
    ]
};

module.exports = scripts;


