import { Component } from "react";


export default class Header extends Component{
   render(){
      return  <div>
      <h4>{this.props.username}'s to do list</h4>
   </div>
   }
}