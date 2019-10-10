import React from 'react';
import { getFunName  } from '../helpers';
import PropTypes from 'prop-types';

class StorePicker extends  React.Component {
 
    myInput = React.createRef();

    static propTypes = {
        history: PropTypes.object,
    };

    goToStore = event => {
        event.preventDefault();
        const storeName = this.myInput.current.defaultValue;
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return( 
            <div id="fullBg">
                <div className="container">
                    <form onSubmit={this.goToStore} className="form-signin">
                        <div className="form-group">
                            <h2> Please Enter A Store</h2>
                            <input 
                                className="form-control input "
                                type="text" 
                                required 
                                placeholder="Store Name" 
                                defaultValue={getFunName()} 
                                ref={this.myInput}
                            />
                            
                        </div>
                        <button type="submit" className="btn btn-lg btn-primary btn-block"> Visit Store &#8594;</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default StorePicker;