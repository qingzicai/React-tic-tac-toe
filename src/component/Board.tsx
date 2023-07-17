import {useState} from "react";
import Square from "./Square.tsx";

const Board = () => {
    const [xIsNext, setXIsNext] = useState( true );
    const [squares, setSquares] = useState (Array(9).fill(null))

    function handleClick(i) {
        if (squares[i]){
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext){
            nextSquares[i] = "X";
        }else{
            nextSquares[i] = 'O';
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    return (
        <>
            <>
                <div className="board-row">
                    <Square number={squares[0]} onSquareClick = {() => handleClick(0)}/>
                    <Square number={squares[1]} onSquareClick = {() => handleClick(1)}/>
                    <Square number={squares[2]} onSquareClick = {() => handleClick(2)}/>
                </div>
                <div className="board-row">
                    <Square number={squares[3]} onSquareClick = {() => handleClick(3)}/>
                    <Square number={squares[4]} onSquareClick = {() => handleClick(4)}/>
                    <Square number={squares[5]} onSquareClick = {() => handleClick(5)}/>
                </div>
                <div className="board-row">
                    <Square number={squares[6]} onSquareClick = {() => handleClick(6)}/>
                    <Square number={squares[7]} onSquareClick = {() => handleClick(7)}/>
                    <Square number={squares[8]} onSquareClick = {() => handleClick(8)}/>
                </div>
            </>
        </>
    )
}

export default Board;