import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='relative w-full bg-transparent bg-black z-[-2]'>
            <div className="bg-gray-800 bg-opacity-10 text-white pb-8 pt-10">
                <div className="container mx-auto flex sm:flex-row justify-center gap-[90px] items-center">
                    <div className="flex flex-col items-center pl-[10%] md:items-start mb-4 md:mb-0">
                        <h3 className="text-xl font-bold mb-2 -ml-[35px] sm:mr-auto">Contact Information</h3>
                        <p className="mb-1 sm:-ml-[35px]"><FaEnvelope className="inline mr-2" />agrimtawani139@gmail.com</p>
                        <p className="mb-1 -ml-[85px] sm:-ml-[40px]"><FaPhone className="inline mr-2" />+91 8104048639</p>
                        <p className="mb-1 w-[70%] -ml-[60px] sm:-ml-[40px]">Thakur Complex, Kandivali-E, Mumbai</p>
                    </div>
                    <div className="flex flex-col items-center pr-[10%] mb-4 md:mb-0">
                        <h3 className="text-xl font-bold mb-2 -mt-[70px]">Follow Me</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/in/agrim-tawani-227502295/" className="text-white hover:text-gray-400 hover:cursor-pointer">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://github.com/AgrimTawani" className="text-white hover:text-gray-400  hover:cursor-pointer">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://x.com/agrim_tawani" className="text-white hover:text-gray-400  hover:cursor-pointer">
                                <FaTwitter size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p>&copy; {new Date().getFullYear()} Agrim Tawani. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
    
}   


export default Footer;
