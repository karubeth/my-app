import {useState} from 'react';


  function Square({value},{onSquareClick}){
    //const[value , setValue] = useState(Array(9).fill(null));

  /*function handleClick(){
    setValue('x');
  }*/
  return <button className="square" onClick = {onSquareClick}>{value}</button>
    
   
}
export default function Board(){//main function
  const[squares , setSquares] = useState(Array(9).fill(null));
  function handleClick(){
    const nextSquares=squares.slice();
    nextSquares[0] = "x";
    setSquares(nextSquares);
  }
  return (//the different square boxes returned by the function 
   <>
    <div>
     <Square value = {squares[0]} onSquareClick = {handleClick} />
     <Square value = {squares[1]} />
     <Square value = {squares[2]} />
    </div>

    <div>
     <Square value = {squares[3]} />
     <Square value = {squares[4]} />
     <Square value = {squares[5]} /> 
    </div>

    <div>
     <Square value = {squares[6]} />
     <Square value = {squares[7]} />
     <Square value = {squares[8]} />
    </div>
  </>
);
  }