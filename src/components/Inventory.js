import React from 'react';
import AddItemForm from './AddItemForm';
import EditItemForm from './EditItemForm';
import PropTypes from 'prop-types';

class Inventory extends React.Component {
    
    static propTypes = {
        items: PropTypes.object,
        updateItem: PropTypes.func,
        deleteItem: PropTypes.func,
        addItem: PropTypes.func,
    };

    render() {
        return (
            <div className="main_boxes inventory col-md-4">
                Inventory

                {Object.keys(this.props.items).map(key => {
                    return <EditItemForm 
                        key={key} 
                        item={this.props.items[key]} 
                        index={key}
                        updateItem={this.props.updateItem}
                        deleteItem={this.props.deleteItem}
                        />
                })}

                <AddItemForm addItem={this.props.addItem}/>

                {/* <button onClick={this.props.loadSampleItems} className="btn btn-light btn mt-2">Load sample items</button> */}
                
            </div>
        )
    }
}

export default Inventory;