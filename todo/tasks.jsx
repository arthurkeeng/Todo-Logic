import { Component } from "react";



export default class Tasks extends Component{
   render(){
      const { item } = this.props
      return <div key = {item.id}>
      <h4><span>
         {item.action} 
         </span>
          <span><input type="checkbox" checked = {item.done} 
          onChange = {() =>this.props.editItem(item.id)} /></span>
          <span><button 
          onClick={() => this.props.delete(item.id)}> del</button></span>
      </h4>
   </div>
   }
}