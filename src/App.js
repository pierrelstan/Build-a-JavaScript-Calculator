import React, { Component } from 'react';
import './App.css';
import CalculatorNumbers, { NumbersData } from "./components/numbers";
import Sign, { SignData } from "./components/sign";
import Display from './components/display';
import Dot from './components/dot';
import Results from './components/results';


class App extends Component {
  constructor() {
    super();
    this.state = { display: [0], newDisplay: [], arrayOne: [], arrayTwo: [], calculation: false, resetButtons: false, sign: [], limitDigit: "limited digits met", num: [], findhowmanydot: true, dotclicked: [], clickDot: [], Dot: [], results: [], result: false , multipleOperators: false};
  }
  // arrow fix biding
  handleClickNumbers = (numbers) => {
    const { display, calculation } = this.state;

    // check if 0 exist in the the beginning of display if true return an empty state display array
    if (display[0] === 0) {
      let displayIndexOne = display[1]
      this.setState({ display: [displayIndexOne] });
    }
    if (display.length === 3) {
      display.filter((data) =>{
        if (data === 0) {
          this.setState({
            display: []
          })
        }
      })


    }

    if (calculation === true) {
      // console.log("this is true")
      this.setState(prevState => ({
        display: [...prevState.display],
        calculation: false
      }))
    }

    if (display.length === 25) {
      const result = display.filter(num => num.length === 25);
      this.setState(prevState => ({
        display: [result],
      }));
      //  console.log(numbers)
    }

    this.setState(prevState => ({
      display: [...prevState.display, numbers]
    }));

    // console.log(numbers)


  }
  //that's return  the calculations
  Calculation = (ca) => {
    const { display, arrayTwo, multipleOperators, results } = this.state;
  
    
   if(multipleOperators === false) {
      let concatTwoArray = display;
      // console.log(concatTwoArray + "te calculations")
      let turnnumbersToString = concatTwoArray.join("");


      // // let replaceItemsTwo = turnToString.replace(/[,]/gi, "");
      let replaceItemsTwo = turnnumbersToString.replace(/[,]/gi, "");
      // let x = Number(replaceItemsOne)
      console.log(replaceItemsTwo+ "ht")
      let total2 = eval(replaceItemsTwo);

      // let total2 = eval(replaceItemsOne);
      console.log(total2 + "rerler")
      this.setState({
       display:[total2],
        calculation: true,
      })
      // console.log(total2 + "from calcution")
      console.log(display + "results")
    }
  else {
     let Nexdi = display.slice(display.length - 2);
     let a = Nexdi.reverse()
     console.log(Nexdi.reverse() + "Nex")
     let copNex2 = arrayTwo[0].slice(0, arrayTwo[0].length - 1)
     console.log(copNex2 + "Nex23")
     let concatTwoArray = [...copNex2, ...a];
     let turnnumbersToStringp = concatTwoArray.join("");
     let replaceItemsOne = turnnumbersToStringp.replace(/[,]/gi, "");
     // let x = Number(replaceItemsOne)
     console.log(replaceItemsOne + "ht")
     let total = eval(replaceItemsOne);
     // let total2 = eval(replaceItemsOne);
     // console.log(total2)
     this.setState({
       display: [total],
       // results:[total],
       // arrayTwo: [total2],
       calculation: true,
     })
  }
    

  }


  handleClickSigns = (sign) => {
    this.setState((prevState) => ({
      display: [...prevState.display, sign],
    }))
   
    const { display, arrayTwo }= this.state;
    let operatorsOne = ["*", "+", "/", "-"];

    let arrPrincipale = display;
    
      // create an empty array
      let displayy = [];

 


    //  Check if operator exist in arrPrincipale 
    arrPrincipale.map((ar) => operatorsOne.map((op) => {
      if (ar === op) {
        displayy.push(ar)
      }
    }))

    // console.log(display)
    // take the  display who is the operators that exist in arrPrincipale
    // and find the index of  operators that exist in arrPrincipale
    let y = displayy.map((subDisplay) => {
      // console.log(subDisplay)
      let displaytoStr = arrPrincipale.toString()
      return arrPrincipale.findIndex((v) => v === subDisplay)
    })

    if(y.length >=2 ){
      this.setState({
        multipleOperators: true
      })
    }
    else  if(y.length <= 1){
      this.setState({
        multipleOperators: false
      })
    }
    else {
   return;
    }
    // y return the index operators that exist in arrPrincipale 
    // console.log(y)
    // iterate in y 
    let co = y.map((data) => {
      // console.log([data])
      // create the current operators that exist in arrPrincipale
      let indexArrOne = arrPrincipale[data];
      // compare arrPrincipale with indexArrOne  and compare the lenght of y
      // if (arrPrincipale.includes(indexArrOne) === true && y.length === 1) {
      //   let copyArray = arrPrincipale.slice(0);
      //   // let indexOne = y[0]
      //   // let gh = copyArray.splice(data, y.length, arrPrincipale[data])

      //   return copyArray
      // }
      if (arrPrincipale.includes(indexArrOne) === true && y.length === 2) {
        let indexY = y[0]
        let indexTw = y[1];
        let copyArray = arrPrincipale.slice(0)
        copyArray.splice(data, y.length - 1, arrPrincipale[indexTw])
        return copyArray
      }
      else if (arrPrincipale.includes(indexArrOne) === true && y.length === 3) {
        let indexY = y[0]
        let indexTw = y[1];
        let indexThr = y[2];
        let copyArray = arrPrincipale.slice(0)
        copyArray.splice(data, y.length, arrPrincipale[indexThr])
        return copyArray
      }
      else if (arrPrincipale.includes(indexArrOne) === true && y.length > 3) {
        let indexFour = [3];
        let copyArray = arrPrincipale.slice(0)
        copyArray.splice(data, y.length, arrPrincipale[y[data]])
        return copyArray
      }
      else {
        return arrPrincipale
      }

    })
  
  this.setState((prevState)=> ({
    arrayTwo: [ co[0]],
  }))
    
 
    
  }
  // Arrow fix biding 
  ResetButtons = () => {
    const { resetButtons } = this.state;
    if (!resetButtons) {
      this.setState({
        display: [0],
        arrayTwo: [],
        results:[]
      })
    }
  }
  //Arrow fix biding 
  EqualCalculations = () => {
    return this.Calculation
  }
  //arrow fix bidng
  handleDot = (dot) => {
    const { display, Dot } = this.state;
    this.setState((prevState => ({
      display: [...prevState.display, dot],
      // Dot:[...prevState.Dot,...dot]
    })))

    // let displayCopyOne = display.slice(0);
    let searchPositionOfValueOfDot = display.filter((data) => {
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

    let copyArray = display.slice(searchThePositionOfDot + 1)

    //  find index
    let Position = copyArray.findIndex((value) => value === ".");

    // lenghtOFNewDot
    let compareIfDotExist = copyArray.filter((data) => {
      return data !== "."
    })
    // console.log(compareIfDotExist + " lalal")

    if (display[searchPositionOfValueOfDot] === display[theNextValueOfDot]) {

      display.splice(theNextValueOfDot - theLengthOfDot, theLengthOfDot + theLengthOfDot)
    }
    else if (display[searchPositionOfValueOfDot] === display[theNextValueOfDot + 1]) {

      let displayOne = display.splice(display[theNextValueOfDot + 1], theLengthOfDot + theLengthOfDot + 1 - 2)

      console.log(displayOne + "the first display")
      this.setState((prevState) => ({
        display: [display],
        arrayOne: [display]
      }))


    } 
    else {
      return;
    }
  

    
  }



  render() {
    const { display, results } = this.state;
    return (<div className="back-gr">
      <div className="App-container">
        <h1 className="title-calculator">calculator</h1>
        <Display display={display} result={results} />
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
    </div>);
  }
}

export default App;
