import {React} from 'react'
import MenuItem from './MenuItem'

const Menu = ({menus}) => {


    return (
        <div>
            <ul className='relative left-10'>
                {
                    menus.map(menu => 
                        <MenuItem 
                            title = {menu.title}
                            icon = {menu.icon}
                            url = {menu.url}
                        />
                    )
                }
            </ul>
        </div>
    )
}

export default Menu;