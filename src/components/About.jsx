import { useRef } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Work from './Work';

const About = () => {
    const [text] = useTypewriter({
        words: ['Hi, This is Agrim.'],
        loop: 1,
        typeSpeed: 100,
    });

    const pRef = useRef(null);

    
    useGSAP(() => {
        gsap.fromTo(pRef.current,
            { opacity: 0, x: -100 }, 
            { 
                opacity: 1, 
                x: 0, 
                duration: 1, 
                delay: 2,
                stagger: 0.1
            }
        );
    }, []);

    return (
        <div>
            <div className='flex-col w-full h-full'>
            <div className="p-5 flex">
                <h1 className="sm:scale-150 sm:ml-[19.5%] ml-[15px] pt-10 font-bold text-6xl font-Inconsolata">
                    {text}
                    <span className='text-red-600'>
                        <Cursor />
                    </span>
                </h1>
            </div>
            <div>
                <p ref={pRef} className='sm:p-9 sm:ml-[8.75%] ml-[33px] sm:text-3xl text-2xl max-w-4xl font-Quicksand'>
                I’m a software developer with a background in web development and a keen interest in Web3 technologies. Right now, I’m focusing on learning AIML and exploring robotic operating systems. I am very passionate about learning new skills and building projects. Take a look at my projects, and if you have any questions or ideas for collaboration, let’s get in touch!
                </p>
            </div>
            </div>
            <div>
                <Work />
            </div>
        </div>
    )
}

export default About;
