import logo from '../../public/assets/img/Rectangle 4405.png';
import vector from '../../public/assets/img/Rectangle 4406.png';
import camera from '../../public/assets/img/_Group_.png';
import polygon from '../../public/assets/img/Polygon 1.png';
import mark from '../../public/assets/img/Mask Group.png';
const Contact = () => {

    return (
        <div className='margin-120'>
                <div className='container justify-center items-center text-center flex flex-row relative h-48 mb-20'>
                    <div className=' w-1/2'>
                        <h1 className='font-56 text-center text-white mb-5'>

                            Face Recognition
                        </h1>
                        <p className=' text-white text-center font-18 mb-5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis nunc maecenas rhoncus pellentesque ante odio turpis. Urna et sem
                        </p>
                    </div>
                    <div>
                        <img src={camera} className='camera'></img>
                        <img src={polygon} className='polygon'></img>
                    </div>

                </div>
                <div className='container flex flex-row bg-contact border-radius-20 mb-36 flex-wrap'>
                    <div className='w-1/2 p-20 align-middle items-center' >
                        <h1 className='text-white font-52'>What is</h1>
                        
                        <div class="w-420 h-20 flex w-full relative items-center justify-center text-center">
                            <h2 className='font-52 text-yellow-200'>Face Recognition?</h2>
                            <div class="absolute top-0 left-0 w-10 h-5 border-2 border-amber-300 border-r-0 border-b-0"></div>
                            <div class="absolute top-0 right-0 w-5 h-5 border-2 border-amber-300 border-l-0 border-b-0"></div>
                            <div class="absolute bottom-0 left-0 w-5 h-5 border-2 border-amber-300 border-r-0 border-t-0"></div>
                            <div class="absolute bottom-0 right-0 w-5 h-5 border-2 border-amber-300 border-l-0 border-t-0"></div>
                        </div>

                        <p className='text-white pb-10 pt-10 font-18'>

                        Face recognition is mainly used for identification. Due to the popularity of video surveillance, many video surveillance systems urgently need a kind of rapid identification technology under in order to quickly identify people in remote and realize intelligent alarm beforehand.
                        </p>
                        <p className='text-white font-18'>
                        Dahua Face Recognition solutions offer high accuracy of detection rate and recognition rate with its advanced AI technology ,and can provide such functions as Face Detection, Face Comparison, Intelligent Search, Face Image Search, Face Database Management, Mobile App Linkage, Information Display, Video Full Color ,etc. to improve user experience.
                        </p>
                    </div>
                    <div className='w-1/2 relative'>
                        <img src={logo} width={"100%"}></img>
                        <img src={vector} width={"100%"} className='img-vector'></img>
                    </div>
                </div>

                <div className="container  bg-contact border-radius-20 mb-36 relative border-2 border-white" >
                    <img src={mark} width={"100%"}  className='h-full absolute'></img>
                    <div className='flex flex-row flex-wrap'>
                        <div className='w-1/2 p-24 pr-0 align-middle items-center' >
                            <p className='text-white font-32'>Our over 240-strong team provides an all-EMEA service</p>

                        </div>
                        <div className='w-1/2 relative flex justify-center items-center btn-contact'>
                        <button class="bg-white hover:bg-gray-200 text-gray-800 font-18 py-2 px-4 rounded">
                        Conntact us
                        </button>

                        </div>
                    </div>

                </div>
        </div>

    )
}

export default Contact;