import React from 'react';

const Dot =({dot, onClick})=> (
    <button id="decimal" className="dot_sign" onClick={()=> onClick(dot)}>{dot}</button>
)
export default Dot;