import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <div className=" header">
            <header>
                <h3>{ props.tagline}</h3>                
            </header>
        </div>
    )
}

Header.propTypes = {
    tagline: PropTypes.string,
};

export default Header;