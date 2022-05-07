import React from 'react';

import "./style2.css"

const Usestate = () => {
    
    const [myNum, setmyNum ]= React.useState(0);
    console.log(myNum);
  return (
    <>
    <h1 className="heading">State Manegment Use State Hooks </h1>
  <h2 className="score">{myNum}</h2>
  <div className="score-group">
        <div className="increaments" onClick={() => setmyNum(myNum + 1)}>Increament</div>
        <br/>
        <div className="decreaments" onClick={() => (myNum > 0 ? setmyNum(myNum - 1) : setmyNum (0))}>Decreament</div>
        </div>
    </>
  )
}

export default Usestate