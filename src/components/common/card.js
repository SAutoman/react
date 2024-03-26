import React from "react";

const Card = (props) => {
    const {classNames} = props;
    return (
        <div className={`card bg-gray-400 bg-opacity-5 rounded-lg w-full items-center mt-3 text-sm min-h-14 p-2 flex ${classNames}`}>
            
            {props.children}
        </div>
    )

}

export default Card;