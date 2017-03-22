window.jQuery = window.$ =  require("jquery");
window._ =  require("lodash");

require("bootstrap");

require.ensure([], function(require){
    require('./Router.jsx');
});
