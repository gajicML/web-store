import React from 'react';

const Header = (props) => {
    return (
        <div className=" header">
            <header>
                <h3>{ props.tagline}</h3>                
            </header>
        </div>
    )
}

export default Header;