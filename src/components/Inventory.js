import React from 'react';
import AddItemForm from './AddItemForm';
import EditItemForm from './EditItemForm';
import PropTypes from 'prop-types';
import Login from './Login';
import base, {firebaseApp} from '../base';
import firebase from 'firebase';

class Inventory extends React.Component {
    
    static propTypes = {
        items: PropTypes.object,
        updateItem: PropTypes.func,
        deleteItem: PropTypes.func,
        addItem: PropTypes.func,
    };

    state = {
        uid: null,
        owner: null,
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                this.authHandler({ user });
            }
        });
    }

    authHandler = async authData => {
        const store = await base.fetch(this.props.storeId, {context: this});
        if(!store.owner) {
            await base.post(`${this.props.storeId}/owner`, {
                data: authData.user.uid
            });
        }
        this.setState({
            uid: authData.user.uid,
            owner: store.owner || authData.user.uid
        });
    };

    authenticate = provider => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.authHandler);
    };

    logout = async () => {
        console.log('Logging Out');
        await firebase.auth().signOut();
        this.setState({
            uid: null
        });
    };

    render() {
        const logout = <button className="btn btn-secondary" onClick={this.logout}>Logout</button>
        
        if(!this.state.uid) {
            return <Login authenticate={this.authenticate}/>
        }

        if(this.state.uid !== this.state.owner){
            return(
                <div>
                    <p>You are not the pwner of store</p>
                    {logout}
                </div>
            )
        }
        
        return (
            <div className="main_boxes inventory col-md-4">
                <h3>Inventory</h3>
                <div className="logout logout-fixed">{logout}</div>

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