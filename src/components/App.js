import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Item from './Item';
import sampleItems from '../sample-items';
import base from '../base';
import PropTypes from 'prop-types';

class App extends React.Component {
    state = {
        items: {},
        order: {},
    };

    static propTypes = {
        match: PropTypes.object,
    };

    componentDidMount(){
        const { params } = this.props.match;
        this.ref = base.syncState(`${params.storeId}/items`, {
            context: this,
            state: 'items'
        });
         
        const localStorageRef = localStorage.getItem(this.props.match.params.storeId);
        if(localStorageRef) {
            this.setState({
                order: JSON.parse(localStorageRef),
            });
        }

         this.setState({
            items: sampleItems
        });
    };

    componentDidUpdate() {
        localStorage.setItem(
            this.props.match.params.storeId, 
            JSON.stringify(this.state.order)
        );
       

    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    };

    addItem = item => {
        const items = {...this.state.items};
        items[`item${Date.now()}`] = item;
        this.setState({
            items: items
        });

    };

    updateItem = (key, updateItem) => {
        const items = {...this.state.items};
        items[key] = updateItem;
        this.setState({
            items: items
        })
    };

    deleteItem = (key) => {
        const items = {...this.state.items};
        items[key] = null;
        this.setState({
            items: items
        })
    };

    addToOrder = key => {
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({
            order: order
        });
    };

    removeFromOrder = key => {
        const order = {...this.state.order};
        delete order[key];
        this.setState({
            order: order
        })
    };

    loadSampleItems = () => {
        this.setState({
            items: sampleItems
        });
    };

    

    render() {
        return (
            <div className="container col-md-12 " id="web-store">
                <div className="main_boxes header col-md-4">
                    <Header tagline="Vegatables market"/>
                    <ul className="menu-list list-group">
                        {Object.keys(this.state.items).map(item => {
                            return(
                                <Item 
                                    key={item} 
                                    details={this.state.items[item]}
                                    index={item}
                                    addToOrder={this.addToOrder}
                                />
                            );
                        })}
                    </ul>
                </div>
                <Order 
                    items={this.state.items}
                    order={this.state.order}
                    removeFromOrder={this.removeFromOrder}
                />
                <Inventory 
                    addItem={this.addItem}
                    items={this.state.items}
                    updateItem={this.updateItem}
                    deleteItem={this.deleteItem}
                    authenticate={this.authenticate}
                    storeId={this.props.match.params.storeId}
                    // loadSampleItems={this.loadSampleItems}    
                />
            </div>
        );
    };
};

export default App;