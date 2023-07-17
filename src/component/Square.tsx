import {useState} from "react";

const Square = ({number, onSquareClick}) => {

    // const [value, setValue] = useState(null)
    // function handleClick() {
    //     setValue('X')
    // }

    return (
        <button
            className="square btn-lg m-1 bg-accent text-primary-content"
            onClick={onSquareClick}
            // onClick={handleClick}
        >
            {number}
        </button>
    );
}

export default Square;