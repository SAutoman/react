import { React, useState } from "react";
import Logo from "../components/auth/logo";
import Menu from "../components/Menu/Menu";
import Logout from "../components/auth/logout";
import { IoIosArchive, IoIosContacts, IoIosDocument, IoIosHome, IoIosMan, IoIosSettings } from "react-icons/io";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SubNav from "./subnav";
import Card from "../components/common/card";
import { Collapse } from "react-collapse";
import TaskMoreInfo from "../components/TaskMoreInfo";
const Nav = () => {
    const [ isSubVisible, setIseSubVisible ] = useState(false);


    const [isExpanded, setIsExpanded] = useState(true);

    const toggleCollapse = () => {
        console.log(isExpanded);
        setIsExpanded(!isExpanded);
    }


    const menus = [
        {
            icon: <IoIosHome className="font-30"/>,
            title: 'Dashboard',
            url : '#',

        },
        {
            icon: <IoIosDocument className="font-30"/>,
            title: 'Document',
            url : '#',
            sub_menus : [
                {
                    title: 'Update info',
                },
                {
                    title: 'Tasks',
                },
                {
                    title: 'Account Finace',
                },
                {
                    title: 'Request',
                },
                {
                    title: 'Book',
                }
            ]
        },
        {
            icon: <IoIosContacts className="font-30"/>,
            title: 'Contracts',
            url : '#',


        },
        {
            icon: <IoIosArchive className="font-30"/>,
            title: 'Archive',
            url : '#',

        },
        {
            icon: <IoIosMan className="font-30"/>,
            title: 'File X',
            url : '#',

        },
        {
            icon: <IoIosSettings className="font-30"/>,
            title: 'Settings',
            url : '#',

        }
    ];

    const handleClick = ()=> {
        setIseSubVisible(!isSubVisible);
    }
    return (
        <>
            <div className="h-screen bg-indigo-950 bg-opacity-25 border-r-[1px] border-gray-700 flex-col w-309 hidden lg:flex">
                <Logo  />
                <Menu 
                    menus={menus}
                    onClick = {()=>handleClick()}
                />
                <Logout />
            </div>
            {/* {
                isSubVisible ? <SubNav/> : <></>
            } */}
        </>
    )
}

export default Nav;