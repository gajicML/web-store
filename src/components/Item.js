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
        const imageStyle = {
            backgroundImage: 'url("'+image+'")',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            height: '100%'
        };
        
        return (
            <li className="list-group-item" >
                
                <div className="card mb-3" >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <div className="card-img" style={imageStyle} ></div>
                            {/* <img className="card-img " src={image} alt={name} /> */}
                        </div>
                        <div  className="col-md-8 content-item">
                            <h5 className="card-title">{name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{formatPrice(price)}</h6>
                            <p className="card-text">{desc}</p>
                            <button 
                                className="card-link btn btn-success btn-sm" 
                                disabled={!isAvailable}
                                onClick={this.handleClick}
                                > 
                                    {isAvailable ? "Add to Order" : "Sold Out"}
                                
                                </button>
                        </div>
                    </div>
                </div>
                
            </li>
            )


        }
}

export default Item;