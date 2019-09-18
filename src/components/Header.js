import React from 'react';

const Header = (props) => {
    return (
        <div className="main_boxes header col-md-4">
            <header>
                <h3>{ props.tagline}</h3>                
            </header>
        </div>
    )
}

export default Header;