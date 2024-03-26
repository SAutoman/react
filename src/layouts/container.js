import React from "react";

const Container = ({ title, subtitle}) => {

    return (
        <div className="w-full h-full p-10">
           <h2 className=" text-yellow-400">{title}</h2>
           <h4 className=" text-white">Things to do</h4>
        </div>
    )
}

export default Container;