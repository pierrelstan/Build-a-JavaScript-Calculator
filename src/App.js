import React, { Component } from 'react';
import './App.css';
import ButtonData, { buttonData } from "./components/buttons";
import Display from './components/display';



class App extends Component {
  constructor(){
    super();
    this.state = {
       display: "0",
      operators: false,
      clear:false
      }
  }


  handleClick=(buttonName)=> {
    console.log(buttonName)
    let display = this.state.display
    let operators = this.state.operators;

  switch(true){
    case buttonName === "0" ||
      buttonName === "1"  ||
      buttonName === "2" ||
      buttonName === "3" ||
      buttonName === "4" ||
      buttonName === "5" ||
      buttonName === "6" ||
      buttonName === "7" ||
      buttonName === "8" ||
      buttonName === "9":
      
      if(this.state.display !== "0"){
        display += buttonName
        operators = false;
      }
      else {
      
        display =buttonName;
      }
      this.setState({
        
        display: display
      })
      break;
     case buttonName ==="Clear":
     if(!this.state.clear){

      console.log("we")
     }

     break;
      case buttonName === "-" ||
           buttonName === "+" ||
           buttonName ==="/"  ||
           buttonName === "*" :
           if(!this.state.operators){
             display+=buttonName;
             operators = true;
           }
           else {
             const newNumber = display.slice(0, display.length-1)
             display = newNumber + buttonName
           }
      
     
      break;
      default:
      console.log("errors")
  }
    this.setState({
      operators:true,
      display: display
    })
  }
  render() {
    const { display } = this.state;
    
    
    return (
     <div>
        <div className="App-container">
          <h1 className="title-calculator">calculator</h1>
         <Display display={display}  /> 
          
          {
            buttonData.map((data) => (
              <ButtonData key={data.id} id={data.id} buttonName={data.number} handleClick={this.handleClick} />
            ))
          }

        </div>
    </div> 
    );
  }
}

export default App;
