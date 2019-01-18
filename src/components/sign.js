import React from "react";
const Sign =({ sign, onClick })=> (
    <button onClick={()=>onClick(sign)}>{sign}</button>
)
export default Sign;

export const SignData = [{ id: "add", sign: "+" }, { id: "subtract", sign: "-" }, { id: "multiply", sign: "*" }, { id: "divide", sign: "/" }, { id: "decimal", sign: "." }, { id: "equals", sign: "=" }];