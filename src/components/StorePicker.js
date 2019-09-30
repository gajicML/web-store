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
        console.log(storeName)
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return( 
            <div>
                <form className="store-selector " onSubmit={this.goToStore}>
                    <h2> Please Enter A Store</h2>
                    <input 
                        type="text" 
                        required 
                        placeholder="Store Name" 
                        defaultValue={getFunName()} 
                        ref={this.myInput}
                    />
                    <button type="submit"> Visit Store -></button>

                </form>
            </div>
            
        )
    }
}

export default StorePicker;