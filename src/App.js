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
      clear:false,
      decimal:false
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
      
      break;
     case buttonName ==="AC":
           display="0"
      operators = false;
      this.setState({ decimal: false })
     break;
      case buttonName === "-" ||
           buttonName === "+" ||
           buttonName ==="/"  ||
           buttonName === "*" :
           if(!this.state.operators){
             display+=buttonName;
             operators = true;
             this.setState({ decimal: false })
           }
           else {
           
             let newNumber = display.slice(0, display.length -1)
           
             display=newNumber;
             display += buttonName
           }
      
     
      break;

      case buttonName === "=":
      display = eval(display)
      operators = false;

     break;
     case  buttonName === ".":
     if(!this.state.decimal){
       display += "."
       this.setState({decimal:true,})
     }
     break;
      default:
      console.log("errors")
  }
    this.setState({
      operators,
      display
    })
  }
  render() {
    const { display } = this.state;
    
    
    return (
     <div>
        <div className="App-container">
          <h1 className="title-calculator">calculator</h1>
         <Display display={display}  /> 
          <div className="button_container">
          {
            buttonData.map((data) => (
              <ButtonData key={data.id} id={data.id} buttonName={data.number} handleClick={this.handleClick} />
            ))
          }
          </div>
        </div>
    </div> 
    );
  }
}

export default App;
