import React from "react";
import { IoIosLogOut } from "react-icons/io";

const Logout = () => {


    return (
        <div className="absolute bottom-20 left-10 text-slate-600 font-bold flex items-center">
            <IoIosLogOut />
            <button className="ml-2">Log Out</button>
        </div>
    )
}

export default Logout