import React from "react";

const AppCheckBox = ({label}) => {


    return (
        <div className="flex items-center">
           <input type="checkbox" class="form-checkbox rounded bg-transparent bg-opacity-15 text-pink-500" />
            <label className="text-white  ml-5">{label}</label>
        </div>
    )
}

export default AppCheckBox;