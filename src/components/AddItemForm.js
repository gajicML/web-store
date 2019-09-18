import React from 'react';

class AddItemForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

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
    }

    render(){
        return(
            <form className="addItemForm"  onSubmit={this.createItem}>
                <input name="name" ref={this.nameRef} type='text' placeholder='Name' />
                <input name="price" ref={this.priceRef} type='text' placeholder='Price' />
                <select name="status" ref={this.statusRef}>
                    <option value="available">Na stanju</option>
                    <option value="unavailable">Trenutno nema</option>
                </select>
                <textarea name="desc" ref={this.descRef}  placeholder='Description' />
                <input name="image" ref={this.imageRef} type='text' placeholder='Image' />
                <button type='submit'>Add item</button>
            </form>
        )
    }
}

export default AddItemForm;
