import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => {
    return(
        <nav>
            <h2>Inventory Login</h2>
            <button className="btn btn-primary" onClick={()=>{props.authenticate('Github')}}>
                Sign in with GitHub

            </button>
        </nav>
    )
    
}

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
}

export default Login;