import React from "react";

const Search = ({ searchChange , update }) => {
    return (
        <div>
            <input 
                className="pa3 ba b--black bg-lightest-blue mw10 ma3 br4" 
                type="Search" 
                placeholder="Search for ROBO GODS" 
                onChange={update}    
            />
        </div>
    );
}
export default Search;