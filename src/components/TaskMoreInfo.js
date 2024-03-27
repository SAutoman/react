import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
const TaskMoreInfo = ({onClick, isOpend, ...props}) => {

    return (
        <div className="flex text-md m-5 w-full sm:flex-col md:flex-row" onClick={onClick}>
            <div className="w-1/10 flex text-white items-center">
                { isOpend ? <IoIosArrowDown /> : <IoIosArrowUp />}

                <span className=" ml-2 font-18">More</span>
            </div>
            <p className="text-slate-600 font-medium ml-2 font-18">(Projects,  Time Tracking, Remnd, Repeat, Gantt, CRM, Subtask, Tags, Fields)</p>
        </div>
    )
}

export default TaskMoreInfo;