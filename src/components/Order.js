import React from 'react';
import { formatPrice } from '../helpers';
import PropTypes from 'prop-types';

class Order extends React.Component {
    static propTypes = {
        items: PropTypes.object,
        order: PropTypes.object,
        removeFromOrder: PropTypes.func,
    };

    renderOrder = key => {
        const count = this.props.order[key];
        const item = this.props.items[key];

        if(!item) return null;

        const isAvailable = item.status === 'available';

        if(!isAvailable){
            return (
                <li key={key}>Sorry, {item ? item.name : "item"} is no available</li>
            )
        }
        return(
            <li key={key}>
                <span className="order-wrap-items">
                    <span className="item-name">{item.name}</span>  
                    <span className="count">x {count}</span> 
                    <span className="price"> {formatPrice(item.price * count)}</span>
                </span>
                <button type="button" onClick={() => this.props.removeFromOrder(key)} className="close" aria-label="Close">
                    &times;
                </button>
            </li>
        )
    };

    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prev, key) => {
            const item = this.props.items[key];
            const count = this.props.order[key];
            const isAvailable = item && item.status === 'available';
            if(isAvailable) {
                return prev + (count * item.price);
            }
            return prev;
        }, 0)

        return (
            <div className="main_boxes order col-md-4">
                <h3>Order</h3>
                <ul>
                    {orderIds.map(this.renderOrder)}
                </ul>
                <p className="total">Total: {formatPrice(total)}</p>
            </div>
        );
    };
}

export default Order;