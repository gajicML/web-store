import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Item from './Item';
import sampleItems from '../sample-items';

class App extends React.Component {
    state = {
        items: {},
        orders: {},
    }

    addItem = item => {
        const items = {...this.state.items};
        items[`item${Date.now()}`] = item;
        this.setState({
            items: items
        })

    }

    loadSampleItems = () => {
        this.setState({
            items: sampleItems
        })
    }
    render() {
        return (
            <div className="catch-of-the-day container col-md-12 ">
                <div className="main_boxes header col-md-4">
                    <Header tagline="Fruits and vegatables market"/>
                    <ul className="menu-list list-group">
                        {Object.keys(this.state.items).map(item => {
                            return(
                                <Item key={item} details={this.state.items[item]}/>
                            )
                        })}
                    </ul>
                </div>
                <Order />
                <Inventory 
                    addItem={this.addItem}
                    loadSampleItems={this.loadSampleItems}    
                />
            </div>
        )
    }
}

export default App;