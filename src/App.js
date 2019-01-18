import React, { Component } from 'react';
import './App.css';
import CalculatorNumbers, { NumbersData } from "./components/numbers";
import Sign, { SignData } from "./components/sign";

class App extends Component {
  constructor(){
    super();
    this.state={
      display: [],
      calculation: [],
    }
  }
// arrow fix biding
  handleClickNumbers=(numbers)=>{
    this.setState(()=>({
      display:numbers
    }))
    console.log(numbers)
  }
handleClickSigns=(sign)=> {
  this.setState(() => ({
    display: sign
  }))
}
  render() {
    const { display } = this.state;
    return <div className="App-container">
      <div id="display"> { display } </div>
        <div className="numbers">
          {
          NumbersData.map((data)=>
            <CalculatorNumbers
            numbers={data.number}
            key={data.id}
              onClick={this.handleClickNumbers}
            />
          )
          }
        </div>
        <div className="sign">
        {
          SignData.map((dataSign)=>
            <Sign 
            sign={dataSign.sign} 
            key={dataSign.id}
            onClick={this.handleClickSigns}
             />
          )
        }
        </div>
      
      </div>;
  }
}

export default App;
