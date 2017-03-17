import React from 'react';
import { getFunName } from '../helpers';
class StorePicker extends React.Component{

//constructor(){
  //super();
//  this.goToStore = this.goToStore.bind(this);
//}

  goToStore(event){
    event.preventDefault();
    console.log("You changed the url");
    //first grab text from box
    const storeId = this.storeInput.value;
    //second, transition from / to /store/:storeId
    this.context.router.transitionTo(`store/${storeId}`);
  }
  render(){
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
       {/* Comment within JSX must look like this*/}
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store Name"
        defaultValue={getFunName()} ref={(input) => { this.storeInput = input}}/>
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
};

export default StorePicker;
