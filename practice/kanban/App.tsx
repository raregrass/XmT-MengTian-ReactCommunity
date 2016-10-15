import * as React from 'react';
import {render} from 'react-dom';
import {KanbanBoardContainer} from './KanbanBoardContainer';

import "../../style/main.css";

render(<KanbanBoardContainer />, document.getElementById("app"));

/*

 class Search extends React.Component<any, any> {
 constructor() {
 super();
 this.state = {
 searchTerm: "React"
 }
 }

 private handleChange = (event)=> {
 this.setState({
 searchTerm: event.target.value.substr(0, 5)
 });
 };

 private handleSubmit = (event) => {
 console.log("Submitted values are: ", event.target.name.value, event.target.email.value);
 event.preventDefault();
 };

 public render() {
 return (
 <div>
 {/!*Search Term:
 <input type="search"
 value={this.state.searchTerm}
 onChange={this.handleChange}/>

 <textarea defaultValue="This is a description"/>

 <select value="B">
 <option value="A">Mobile</option>
 <option value="B">Work</option>
 <option value="C">Home</option>
 </select>*!/}

 <form onSubmit={this.handleSubmit}>
 <div className="formGroup">
 Name: <input name="name" type="text"/>
 </div>
 <div className="formGroup">
 E-mail: <input name="email" type="email"/>
 </div>
 <button type="submit">Submit</button>
 </form>
 </div>
 )
 }
 }
 render(<Search />, document.getElementById("app"));*/

/*class FocusText extends React.Component<any, any> {
 handleClick() {
 // Explicitly focus the text input using the raw DOM API.
 this.refs.myTextInput.focus();
 }

 render() {
 // The ref attribute adds a reference to the component to
 // this.refs when the component is mounted.
 return (
 <div>
 <input type="text" ref="myTextInput"/>
 <input
 type="button"
 value="Focus the text input"
 onClick={this.handleClick.bind(this)}
 />
 </div>
 );
 }
 }
 render(<FocusText/>, document.getElementById("app"));*/

