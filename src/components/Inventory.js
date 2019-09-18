import React from 'react';
import AddItemForm from './AddItemForm';

class Inventory extends React.Component {
    render() {
        return (
            <div className="main_boxes inventory col-md-4">
                Inventory

                <AddItemForm addItem={this.props.addItem}/>
            </div>
        )
    }
}

export default Inventory;