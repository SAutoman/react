import { React } from "react";
import Menu from "../components/Menu/Menu";

const SubNav = () => {

    const menus = [
        {
            icon: ``,
            title: 'Update info',
            url : '#',
        },
        {
            icon: ``,
            title: 'Tasks',
            url : '#',
        },
        {
            icon: ``,
            title: 'Account Finance',
            url : '#',
        },
        {
            icon: ``,
            title: 'Request',
            url : '#',
        },
        {
            icon: ``,
            title: 'Book',
            url : '#',
        }
    ];
    return (
        <div className="h-screen bg-indigo-950 bg-opacity-25 border-r-gray-500 pt-48 w-265 hidden lg:block">
            <Menu  menus={menus} />
        </div>
    )
}

export default SubNav;