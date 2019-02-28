import React, { Component} from "react";

class ButtonData extends Component {

    handleClickButtons = () => {        this.props.handleClick(this.props.buttonName)
    }
    render(){
       
        return (
            <button id={this.props.id} className="button_numbers" onClick={this.handleClickButtons}>{this.props.buttonName}</button>
        )
    }
}

export default ButtonData;


export const buttonData =[
 {
     id: "zero",
     number: "0",
 },
 {
     id: "one",
     number: "1",
 },
 {
     id: "two",
     number: "2",
 },
 {
     id: "three",
     number: "3",
 },
 {
     id: "four",
     number: "4",
 },
 {
     id:"five",
     number: "5",
 },
 {
     id: "six",
     number: "6",
 },
 {
     id:"seven",
     number: "7",
 },
 {
     id: "eight",
     number: "8",
 },
 {
     id:"nine",
     number:"9"
 },
 {
     id:"clear", number:"AC"
 },
    { id: "add", number: "+" },
     { id: "subtract", number: "-" },
      { id: "multiply", number: "*" }, 
    { id: "divide", number: "/" },
    {id: "decimal", number: "."},
    {id: "equals", number: "="}
]
