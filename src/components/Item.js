import React from 'react';
import { formatPrice } from '../helpers';
import PropTypes from 'prop-types';

class Item extends React.Component {

    handleClick = () => {
        this.props.addToOrder(this.props.index)
    }

    static propTypes = {
        details: PropTypes.shape({
            name: PropTypes.string,
            status: PropTypes.string,
            desc: PropTypes.string,
            image: PropTypes.string,
            price: PropTypes.number,
        }),
        addToOrder: PropTypes.func,
    }
    
    render() {
        const  {name, price, status, desc, image} = this.props.details;
        const isAvailable = status === 'available'; 
      
        return (
            <li className="list-group-item" >
                
                <div className="card" >
                    <img className="card-img-top" src={image} alt={name} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{formatPrice(price)}</h6>
                        <p className="card-text">{desc}</p>
                        <button 
                            className="card-link" 
                            disabled={!isAvailable}
                            onClick={this.handleClick}
                            > 
                                {isAvailable ? "Add to Order" : "Sold Out"}
                            
                            </button>
                    </div>
                </div>
                
            </li>
            )
        }
}

export default Item;