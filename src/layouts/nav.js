import { React } from "react";
import Logo from "../components/auth/logo";
import Menu from "../components/Menu/Menu";
import Logout from "../components/auth/logout";
import { IoIosArchive, IoIosContacts, IoIosDocument, IoIosHome, IoIosMan, IoIosSettings } from "react-icons/io";

const nav = () => {
    const menus = [
        {
            icon: <IoIosHome className="text-2xl"/>,
            title: 'Dashboard',
            url : '#',
        },
        {
            icon: <IoIosDocument className="text-2xl"/>,
            title: 'Document',
            url : '#',
        },
        {
            icon: <IoIosContacts className="text-2xl"/>,
            title: 'Contracts',
            url : '#',
        },
        {
            icon: <IoIosArchive className="text-2xl"/>,
            title: 'Archive',
            url : '#',
        },
        {
            icon: <IoIosMan className="text-2xl"/>,
            title: 'File X',
            url : '#',
        },
        {
            icon: <IoIosSettings className="text-2xl"/>,
            title: 'Settings',
            url : '#',
        }
    ];

    return (
        <div className="h-screen bg-indigo-950 bg-opacity-25 border-r-[1px] border-gray-500 flex-col w-60 hidden lg:flex">
            <Logo  />
                <Menu menus={menus}/>
            <Logout />
        </div>
    )
}

export default nav;