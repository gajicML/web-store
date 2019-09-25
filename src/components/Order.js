import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
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
              {item.name}  x{count}  {formatPrice(item.price * count)}
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
                <ul>
                    {orderIds.map(this.renderOrder)}
                </ul>
                <p>Total: {formatPrice(total)}</p>
            </div>
        );
    };
}

export default Order;