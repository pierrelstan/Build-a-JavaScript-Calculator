import React, { Component } from 'react';
import './App.css';
import CalculatorNumbers, { NumbersData } from "./components/numbers";
import Sign, { SignData } from "./components/sign";
import Display from './components/display';
import Dot  from './components/dot';
import Results from './components/results';


class App extends Component {
  constructor(){
    super();
    this.state = { display: [0], newDisplay: [],arrayOne:[], arrayTwo:[], calculation: false, resetButtons: false, sign: [], limitDigit: "limited digits met", num:[], findhowmanydot:true , dotclicked:[], clickDot: [],Dot:[], results:[], result: false };
  }
// arrow fix biding
  handleClickNumbers=(numbers)=>{
  const { display, calculation} = this.state;
  
  // check if 0 exist in the the beginning of display if true return an empty state display array
   if (display[0] === 0 ){
     let displayIndexOne = display[1]
     this.setState({ display: [displayIndexOne], });
   }
   if(display.length === 3){
    display.filter((data) => {
      if(data === 0){
        this.setState({
          display: []
        })
      }
     })

     let operators = ["*","-","+","/"];
     
   }
  
    if (calculation === true) {
      console.log("this is true")
      this.setState(prevState => ({
        display: [...prevState.display],
        calculation: false
      }))
    }
    //remove underfined in the begining of the display state array
      // if (display[0] === "undefined") {
      //   return this.setState({
      //     display:display.shift()
      //   })

      // }

    // console.log(display)
   //check if the length of display === 25 
   if(display.length === 25) {
     const result = display.filter(num => num.length === 25);
     this.setState(prevState => ({
       display: [result],
     }));
     const { numbers} = this.state;
    //  console.log(numbers)
   }
    
    this.setState(prevState => ({
      display: [...prevState.display, numbers]
    }));
    
    // console.log(numbers)
   
  }
  //that's return  the calculations
  Calculation=()=> {
  const { display, arrayOne,  }= this.state;
    let sign = ["+", "-", "/", "*"];
    let FindIfAnySignExistAndSelectTheLastOne = sign.map((SignData)=> {
      return display.filter((displayData)=> {

      })
    })
    
    let concatTwoArray = arrayOne.concat(display) 
    let turnnumbersToString = concatTwoArray.toString();
    // let turnToString = results.toString();
    // let replaceItemsTwo = turnToString.replace(/[,]/gi, "");
    let replaceItemsOne = turnnumbersToString.replace(/[,]/gi, "");

  
    let total = eval(replaceItemsOne);
  
    this.setState({
      display: [total],
      // result: [totalresult],
      calculation: true,
    })
    console.log(total + "from calcution")
    // console.log(totalresult + "from calcution")
      }

handleClickSigns=(sign)=> {
  this.setState((prevState) => ({
    display: [...prevState.display,sign],
    sign:[sign]
  }))
// console.log(sign + "from handleClickSigns")
}
// Arrow fix biding 
  ResetButtons = ()=> {
    const { resetButtons} = this.state;
    if(!resetButtons){
      this.setState({
        display:[0],
       arrayOne:[]
      })
    }
  }
  //Arrow fix biding 
  EqualCalculations=()=> {
   return this.Calculation
  }
  //arrow fix bidng
handleDot=(dot)=> {
  const { display, Dot }=  this.state;
this.setState((prevState=>({
  display: [...prevState.display, dot],
  // Dot:[...prevState.Dot,...dot]

})))
// console.log(Dot)
  // search the  quantity of value  "." in display

  // let displayCopyOne = display.slice(0);
  let searchPositionOfValueOfDot = display.filter((data)=> {
    return data === "."
  })
  // search the positition on "." in dipslay
  let searchThePositionOfDot = display.indexOf(".")
    // console.log(searchThePositionOfDot)
  // the next index of dot in the display state 
   let theNextValueOfDot = searchThePositionOfDot + 1;


  let theLengthOfDot = searchPositionOfValueOfDot.length;
  // create a copy of display state to create a new array
  // create a copy of display to not modify the original array
  const {calculation } = this.state;

   let copyArray = display.slice(searchThePositionOfDot + 1)

  //  find index
  let Position = copyArray.findIndex((value)=> value === ".");

  // lenghtOFNewDot
  let compareIfDotExist = copyArray.filter((data)=> {
    return data !== "."
  }) 
console.log(compareIfDotExist + " lalal")
  

  
 

if (display[searchPositionOfValueOfDot] === display[theNextValueOfDot]) {

 display.splice(theNextValueOfDot - theLengthOfDot, theLengthOfDot + theLengthOfDot) 
}
else if (display[searchPositionOfValueOfDot] === display[theNextValueOfDot + 1]) {

let displayOne =display.splice(display[theNextValueOfDot  + 1], theLengthOfDot + theLengthOfDot  + 1  - 2)

console.log(displayOne+ "the first display")
  this.setState((prevState)=> ({
    display: [display],
    arrayOne: [displayOne]
  }))
  

} else {
 return
}  
}

 

  render() {
    const { display, result } = this.state;
    return ( <div className="back-gr">
        <div className="App-container">
          <h1 className="title-calculator">calculator</h1>
         <Display display={display} result={result} /> 
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
            <button id="equals" onClick={this.Calculation}>
              =
            </button>
          <Dot dot={"."} onClick={this.handleDot} />
           
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
    </div> );
  }
}

export default App;
