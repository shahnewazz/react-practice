import { useState } from "react";

function Square({value, onClick}){
    return <button onClick={onClick} className="w-12 h-12 flex items-center justify-center border border-gray-300">{value}</button>
}

function calculateWinner(squares)
{
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}

const TicTacToe = () => {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const [status, setStatus] = useState("Next player: X")

    function handleSquareClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        const nextSquares = [...squares];
        nextSquares[i] = xIsNext ? "X" : "O";

        setSquares(nextSquares);

        const winner = calculateWinner(nextSquares);

        if (winner) {
            setStatus(`Winner: ${winner}`);
        } else {
            setXIsNext(!xIsNext);
            setStatus(`Next player: ${!xIsNext ? "X" : "O"}`);
        }
    }


    return (
        <>
            <h3 className=" text-xl mb-4">{status}</h3>
            <div className="grid grid-cols-3 gap-2 w-40">
                <Square value={squares[0]} onClick={() => handleSquareClick(0)} />
                <Square value={squares[1]} onClick={() => handleSquareClick(1)} />
                <Square value={squares[2]} onClick={() => handleSquareClick(2)} />
                <Square value={squares[3]} onClick={() => handleSquareClick(3)} />
                <Square value={squares[4]} onClick={() => handleSquareClick(4)} />
                <Square value={squares[5]} onClick={() => handleSquareClick(5)} />
                <Square value={squares[6]} onClick={() => handleSquareClick(6)} />
                <Square value={squares[7]} onClick={() => handleSquareClick(7)} />
                <Square value={squares[8]} onClick={() => handleSquareClick(8)} />
            </div>
        </>
    );
};

export default TicTacToe;