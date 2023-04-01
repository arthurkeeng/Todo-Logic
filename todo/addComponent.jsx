import { Component } from "react";



export default class Add  extends Component{
   render(){ 
      return <div>
      <input 
      value={this.props.val}
      onChange = {e =>this.props.newItem(e.target.value)}
      type="text" placeholder="please enter new task" />
      <input 
      onClick={this.props.addItems}
      type="button" value="ADD" />
   </div>
   }
}