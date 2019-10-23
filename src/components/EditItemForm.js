import React from 'react';
import PropTypes from 'prop-types';

class EditItemForm extends React.Component {

    static propTypes = {
        item: PropTypes.shape({
            name: PropTypes.string,
            price: PropTypes.number,
            status: PropTypes.string,
            desc: PropTypes.string,
            image: PropTypes.string,
        }),
        updateItem: PropTypes.func,
        deleteItem: PropTypes.func,
        index: PropTypes.string,
    };

    handleChange = (event) => {
        const updateItem = {
            ...this.props.item,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateItem(this.props.index, updateItem);

    }

    render(){
        return(
            <form className="addItemForm card" >
                <div className="card-body">
                    <div className="form-row">
                        <div className="form-group col-md-4"> 
                            <input 
                                name="name" 
                                value={this.props.item.name} 
                                onChange={this.handleChange} 
                                type='text' 
                                placeholder='Name' 
                                className="form-control" 
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <input 
                                name="price" 
                                value={this.props.item.price} 
                                onChange={this.handleChange} 
                                type='text' 
                                placeholder='Price' 
                                className="form-control" 
                            />
                        </div>
                        <select 
                            className="form-group col-md-4" 
                            name="status" 
                            value={this.props.item.status} 
                            onChange={this.handleChange}>

                            <option value="available">In Stock</option>
                            <option value="unavailable">Sold Out</option>
                        </select>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-12"> 
                            <textarea 
                                name="desc" 
                                value={this.props.item.desc} 
                                onChange={this.handleChange}  
                                placeholder='Description' 
                                className="form-control"
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-12"> 
                            <input 
                                name="image" 
                                value={this.props.item.image} 
                                onChange={this.handleChange} 
                                type='text' 
                                placeholder='Image url' 
                                className="form-control" 
                            />
                        </div>
                        
                    </div>
                </div>
                <button className="btn btn-danger" onClick={() => this.props.deleteItem(this.props.index)}>Delete Item</button>
            </form>
            
        )
    }
}

export default EditItemForm;
