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
  // check if 0 exist in the display if true return an empty state display array
   if (display[0] === 0){
     this.setState({
       calculation: [],
       display:[]
     })
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
    const { display, calculation } = this.state;
    return <div className="App-container">
        <div id="display"> { display } </div>
        <button id="clear" onClick={this.ResetButtons}>
          Clear
        </button>
      <button id="equals">
          =
        </button>
        <div className="numbers">
          {NumbersData.map(data => (
            <CalculatorNumbers
              numbers={data.number}
              key={data.id}
              id={data.id}
              onClick={this.handleClickNumbers}
            />
          ))}
        </div>
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
      </div>;
  }
}

export default App;
