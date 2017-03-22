/**
 * Created by Firdaus E.D on 11/30/15.
 */

import React from 'react'

let Header = React.createClass({
    render: function () {
        return <header id="header">
                <h1>THIS IS HEADER</h1>
                {/* logout button */}
                {/*<div id="logout" className="btn-header transparent pull-right">*/}
                    {/*<span> <a href="#/login" title="Sign Out"*/}
                              {/*data-logout-msg="You can improve your security further after logging out by closing this opened browser"><i*/}
                        {/*className="fa fa-sign-out"/></a> </span>*/}
                {/*</div>*/}

                {/* input: search field */}
                {/*<form action="#/misc/search.html" className="header-search pull-right">*/}
                    {/*<input id="search-fld" type="text" name="param" placeholder="Find reports and more"*/}
                           {/*data-autocomplete='[*/}
					{/*"ActionScript",*/}
					{/*"AppleScript",*/}
					{/*"Asp",*/}
					{/*"BASIC",*/}
					{/*"C",*/}
					{/*"C++",*/}
					{/*"Clojure",*/}
					{/*"COBOL",*/}
					{/*"ColdFusion",*/}
					{/*"Erlang",*/}
					{/*"Fortran",*/}
					{/*"Groovy",*/}
					{/*"Haskell",*/}
					{/*"Java",*/}
					{/*"JavaScript",*/}
					{/*"Lisp",*/}
					{/*"Perl",*/}
					{/*"PHP",*/}
					{/*"Python",*/}
					{/*"Ruby",*/}
					{/*"Scala",*/}
					{/*"Scheme"]'/>*/}
                    {/*<button type="submit">*/}
                        {/*<i className="fa fa-search"/>*/}
                    {/*</button>*/}
                    {/*<a href="$" id="cancel-search-js" title="Cancel Search"><i className="fa fa-times"/></a>*/}
                {/*</form>*/}
            {/* end : nav area */}

        </header>
    }
});


export default Header
