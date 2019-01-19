import React from "react";
const Sign =({ sign, onClick , id, index})=> (
    <button  id= {id} onClick={()=>onClick(sign, index)} className="button_sign">{sign}</button>
)
export default Sign;

export const SignData = [{ id: "add", sign: "+" }, { id: "subtract", sign: "-" }, { id: "multiply", sign: "*" }, { id: "divide", sign: "/" }, { id: "decimal", sign: "." },];