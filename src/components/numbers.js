import React from "react";


const CalculatorNumbers =({numbers, onClick})=> (
       
    <button onClick={()=> onClick(numbers)}>{numbers}</button>
)
export default CalculatorNumbers;


export const NumbersData=[
 {
     id: "zero",
     number: 0,
 },
 {
     id: "one",
     number: 1,
 },
 {
     id: "two",
     number: 2,
 },
 {
     id: "three",
     number: 3,
 },
 {
     id: "four",
     number: 4,
 },
 {
     id:"five",
     number: 5,
 },
 {
     id: "six",
     number: 6,
 },
 {
     id:"seven",
     number: 7,
 },
 {
     id: "eight",
     number: 8,
 },
 {
     id:"nine",
     number:9
 }
]
