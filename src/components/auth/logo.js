import {React} from 'react'
import logo from '../../public/assets/img/Rectangle 949.png';
const Logo = () => {

    return (

        <div className='self-center flex flex-col justify-center items-center h-52'>
            <img src={logo} />
            <p className=' text-lg text-white mt-4 '>Danil Ivashchenko</p>
            <h3 className=' text-slate-600 mt-2 font-medium'>Admin</h3>
        </div>  
    )
}

export default Logo;