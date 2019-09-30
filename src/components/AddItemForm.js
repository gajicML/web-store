import React from 'react';
import PropTypes from 'prop-types';

class AddItemForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    static propTypes = {
        addItem: PropTypes.func
    };

    createItem = event => {
        event.preventDefault();

        const item = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        }
        this.props.addItem(item)
        event.target.reset();
    };

    render(){
        return(
            <form className="addItemForm card"  onSubmit={this.createItem}>
                <div className="card-body">
                    <div className="form-row">
                        <div className="form-group col-md-4"> 
                            <input name="name" ref={this.nameRef} type='text' placeholder='Name' className="form-control" />
                        </div>
                        <div className="form-group col-md-4">
                            <input name="price" ref={this.priceRef} type='text' placeholder='Price' className="form-control" />
                        </div>
                        <select className="form-group col-md-4" name="status" ref={this.statusRef}>
                            <option value="available">Na stanju</option>
                            <option value="unavailable">Trenutno nema</option>
                        </select>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-12"> 
                            <textarea name="desc" ref={this.descRef}  placeholder='Description' className="form-control"/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-12"> 
                            <input name="image" ref={this.imageRef} type='text' placeholder='Image url' className="form-control" />
                        </div>
                        
                    </div>

                    <button type="submit" className="btn btn-primary btn btn-block">Add item</button>
                </div>
            </form>
        )
    }
}

export default AddItemForm;
