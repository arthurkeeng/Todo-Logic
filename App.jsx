


import React, { Component } from "react";
import Add from "./component/addComponent";
import Header from "./component/header";
import Tasks from "./component/tasks";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : 'keengarthur',
      toDoItems : [
      ],
      newItem : ''
    };
  }
newItem = (item) =>{
   this.setState({
      newItem : item
   })

}
  addItems = () =>{
   if(!this.state.toDoItems.find(item => item.action == this.state.newItem)){
      this.setState({
         toDoItems : [
            ...this.state.toDoItems , {
               id :( Math.random() * 100000 ),action : this.state.newItem , done : false
            },
         ],
         newItem : ''
      })
   }
  }

  deleteItem =( id ) =>{
   this.setState({
      toDoItems : this.state.toDoItems.filter(item => item.id !== id)
   })
  }

  editItem = ( id ) =>{
     this.setState({
      toDoItems : this.state.toDoItems.map( item =>{
        return item.id === id ? {...item , done : !item.done} : item
      })
     })
  }
  render(){
   return <>
   
   <Header username = { this.state.username} />
   <Add
   val = { this.state.newItem}
   newItem ={(item) =>this.newItem(item)
   }
   addItems = {this.addItems}
   />
   {
      this.state.toDoItems.length < 1 ?
      <div>
         <h4> No items on your list yet. Enter new items in the input box</h4>
      </div>
      :
      this.state.toDoItems.map(item =>{
         return <Tasks item = {item}
         delete = { (id) => this.deleteItem(id)}
         editItem = {(id) =>this.editItem(id)}
         />
      })
   }
   </>
  }
}
