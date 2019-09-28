import React from 'react';

class EditFishForm extends React.Component {

    handleChange = (event) => {
        const updateItem = {
            ...this.props.item,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateItem(this.props.index, updateItem);

    }

    render(){
        return(
            <form className="addItemForm card"  onSubmit={this.createItem}>
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

                            <option value="available">Na stanju</option>
                            <option value="unavailable">Trenutno nema</option>
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
            </form>
        )
    }
}

export default EditFishForm;
