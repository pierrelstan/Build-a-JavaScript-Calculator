import React, { Component } from 'react';
import './App.css';
import CalculatorNumbers, { NumbersData } from "./components/numbers";
import Sign, { SignData } from "./components/sign";

class App extends Component {
  constructor(){
    super();
    this.state={
      display: [0],
      calculation: [],
      resetButtons: false,
      sign:[]
    }
  }
// arrow fix biding
  handleClickNumbers=(numbers)=>{
  const { display } = this.state;
  // check if 0 exist in the the beginning of display if true return an empty state display array
   if (display[0] === 0){
     this.setState({
       calculation: [], 
       display:[]
     })
   }
   if(display.length === 25) {
     const result = display.filter(num => num.length === 25);
     this.setState(prevState => ({
       display: [ result]
     }));
   }
    
    this.setState(prevState => ({
      display: [...prevState.display, numbers]
    }));
    // console.log(numbers)

    this.Calculation(numbers)
  }
  //that's return  the calculations
  Calculation(numbers){
   console.log(numbers)
   
      }

handleClickSigns=(sign)=> {
  this.setState((prevState) => ({
    display: [...prevState.display,sign]
  }))

  this.Calculation(sign)
}
// Arrow fix biding 
  ResetButtons = ()=> {
    const { resetButtons} = this.state;
    if(!resetButtons){
      this.setState({
        display:[0]
      })
    }
  }
  //Arrow fix biding 
  EqualCalculations=()=> {
   return this.Calculation
  }
  render() {
    const { display } = this.state;
    return <div className="back-gr">
      
        <div className="App-container">
        <h1 className="title-calculator">calculator</h1>
          <div id="display"> {display} </div>

          <div className="numbers">
            {NumbersData.map(data => (
              <CalculatorNumbers
                numbers={data.number}
                key={data.id}
                id={data.id}
                onClick={this.handleClickNumbers}
              />
            ))}
            <button id="clear" onClick={this.ResetButtons}>
              Clear
            </button>
            <button id="equals">=</button>
            <div className="sign">
              {SignData.map(dataSign => (
                <Sign
                  sign={dataSign.sign}
                  key={dataSign.id}
                  id={dataSign.id}
                  onClick={this.handleClickSigns}
                />
              ))}
            </div>
          </div>
        </div>
      </div>;
  }
}

export default App;
