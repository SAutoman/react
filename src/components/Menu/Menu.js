import {React} from 'react'
import MenuItem from './MenuItem'

const Menu = ({menus}) => {


    return (
        <div className='padding-top-50'>
            <ul className='relative left-12 gap-6 left'>
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