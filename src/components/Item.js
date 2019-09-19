import React from 'react';

class Item extends React.Component {
    render() {
        const  {name, price, status, desc, image} = this.props.details; 
        return (
                <li className="list-group-item" >
                   
                    <div class="card" >
                        <img class="card-img-top" src={image} alt={name} />
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{price}</h6>
                            <p class="card-text">{desc}</p>
                            <p class="card-text">{status}</p>
                            <a href="#" class="card-link">Add to Cart</a>
                        </div>
                    </div>
                    
                </li>
            )
        }
}

export default Item;