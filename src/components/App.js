import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

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
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fruits and vegatables market"/>
                </div>
                <Order />
                <Inventory addItem={this.addItem} />
            </div>
        )
    }
}

export default App;