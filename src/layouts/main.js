import { React, useState } from "react";
import Card from "../components/common/card";
import TaskMoreInfo from "../components/TaskMoreInfo";
import AppCheckBox from "../components/common/CheckBox";
import AppDatePicker from "../components/common/AppDatePicker";
import AppEditor from "../components/common/AppEditor";
import { Collapse } from "react-collapse";
import { IoIosCalendar, IoIosAdd, IoIosRemove } from "react-icons/io";

const Main = ({title, subtitle}) => {

    const [isExpanded, setIsExpanded] = useState(true);

    const toggleCollapse = () => {
        console.log(isExpanded);
        setIsExpanded(!isExpanded);
    }

    const customToolbarIcons = {
        // Define custom icons for toolbar buttons
        bold: <img src="path/to/custom-bold-icon.png" alt="Bold" />,
        italic: <img src="path/to/custom-italic-icon.png" alt="Italic" />,
        // Add more custom icons for other toolbar buttons
    };
    return (
    
        <div className="h-screen overflow-hidden overflow-y-auto bg-dark-blue border-r-gray-500 flex-auto p-12">
      
            <h2 className=" font-36 font-bold  text-amber-300">{title}</h2>
            <h4 className=" font-24 text-white mt-5">{subtitle}</h4>
            <AppEditor />      
            <Card classNames={`flex-col md:flex-row sm:justify-start gap-2`}>
                <div className="flex w-full md:w-1/2 items-center">
                    <div className="card-title w-1/3">
                        <h4 className="text-white ml-10 font-18">{`Responsible Person`}</h4>
                    </div>
                    <div className="flex items-center justify-around bg-slate-600 bg-opacity-15 p-2 rounded-md w-2/3">
                        <div className="text-white bg-slate-300 bg-opacity-15 p-2 px-4 flex items-center rounded-md">
                            <span className="mr-4 font-16">Danil Ivashchenko</span>
                            <IoIosRemove />
                        </div>
                        <span className=" text-amber-300 flex items-center">
                                <IoIosAdd />
                                <p>Add More</p>
                        </span>
                    </div>
                </div>
                <div className="flex w-full md:w-1/2 justify-center md:justify-start">
                    <p className=" text-gray-500 ml-4 underline font-16">Create by</p>
                    <p className=" text-gray-500 ml-4 underline font-16">Participants</p>
                    <p className=" text-gray-500 ml-4 underline font-16">Observes</p>
                </div>
            </Card>
            <Card classNames={`flex-col md:flex-row sm:justify-start gap-2`}>
                <div className="flex w-full md:w-1/2 items-center">
                    <div className="card-title w-1/3">
                        <h4 className="text-white ml-10 font-18">{`Deadline`}</h4>
                    </div>
                    <div className=" rounded-md border-slate-800 flex border-2 items-center p-1">
                        <AppDatePicker />
                        <IoIosCalendar  className=" text-amber-300 text-lg mr-2"/>
                    </div>
                </div>
                <div className="flex w-full md:w-1/2 justify-center md:justify-start">
                    <p className=" text-gray-500 ml-4 underline font-16">Time Planing</p>
                    <p className=" text-gray-500 ml-4 underline font-16">Options</p>
                </div>
                </Card>
            <TaskMoreInfo onClick = {() => toggleCollapse()} isOpend={isExpanded}/>
            <Collapse isOpened={isExpanded}>
                <Card classNames={`flex-col md:flex-row sm:justify-start gap-2`}>
                    <div className="flex w-full md:w-1/2 items-center">
                        <div className="card-title w-1/3">
                            <h4 className="text-white ml-10 font-18">{`Project`}</h4>
                        </div>
                        <div className="flex items-center justify-around bg-slate-600 bg-opacity-15 p-2 rounded-md w-2/3">
                            <div className="text-white bg-slate-300 bg-opacity-15 p-2 px-4 flex items-center rounded-md">
                                <span className="mr-4 font-16">Project for this </span>
                                <IoIosRemove />
                            </div>
                            <span className=" text-amber-300 flex items-center">
                                    <IoIosAdd />
                                    <p className="font-16">Add More</p>
                            </span>
                        </div>
                    </div>
                    <div className="flex w-full md:w-1/2 justify-center md:justify-start">
                        <p className=" text-amber-300 ml-4 font-16">Create Project</p>
                    </div>
                </Card>
                <Card >
                    <div className="card-title w-1/6">
                        <h4 className="text-white ml-10 font-18">{`Time Tracking`}</h4>
                    </div>
                    <AppCheckBox className={`font-18`} label={`Task Planned Time`}  />
                </Card>
                <Card title={`Remind about task`}>
                    <div className="card-title w-1/6">
                        <h4 className="text-white ml-10 font-18">{`Remind about task`}</h4>
                    </div>
                    <span className=" text-amber-300 flex items-center">
                            <p className="m-2 flex items-center hover:underline font-18"><IoIosAdd />Add Reminder</p>
                        <p className="text-white font-18">via instant messenger or e-mail</p>
                    </span>
                </Card>
                <Card>
                    <div className="card-title w-1/6">
                        <h4 className="text-white ml-10 font-18">{`Repeat Task`}</h4>
                    </div>
                    <AppCheckBox className="font-18" label={`Activate`} />
                </Card>
                <Card>
                     <div className="card-title w-1/6">
                        <h4 className="text-white ml-10 font-18">{`Gantt`}</h4>
                    </div>
                    <span className=" text-amber-300 flex items-center">
                            <p className="m-2 flex items-center hover:underline font-18">Add preious task</p>
                    </span>
                </Card>
            </Collapse>
        </div>
    )
}

export default Main;