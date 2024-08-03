import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { StarsCanvas } from './';
import { FaJs, FaCss3, FaReact } from 'react-icons/fa';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { download, Currency, hangman } from '../assets';

const Work = () => {

    const title = useRef(null);

    useGSAP(() => {
        gsap.fromTo(title.current,
            { opacity: 0, y: 100 }, 
            { 
                opacity: 1, 
                y: 0, 
                duration: 2, 
                delay: 200,
                stagger: 0.1
            }
        );
    }, []);

    return (
        <div>
        <div className='bg-black absolute z-[-2] w-full h-full'>
        <StarsCanvas />
        </div>
            <h1 className="sm:text-6xl text-5xl z-20 scale-150 font-bold font-Inconsolata sm:ml-[450px] ml-[25%] py-10 pb-4 mt-10" ref={title}>My Work</h1>
            <div className='mt-10 p-2'>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work rounded-xl"
                    contentStyle={{ background: 'rgba(255, 255, 255, 80)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
                    date="2024 - present"
                    iconStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
                    icon={<FaJs />}
                >
                    <h3 className="vertical-timeline-element-title text-lg text-black font-bold">DJS Antariksh</h3>
                    <h4 className="vertical-timeline-element-subtitle text-black">Coding Team</h4>
                    <img src={download} className='my-2 rounded-xl'/>
                    <p className='text-black'>
                        My work in DJS Antariksh contains :
                        <ul className='list-disc list-inside'> 
                            <li>Using ML algorithms</li>
                            <li>Using ROS</li>
                            <li>Developing GUI</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work rounded-xl"
                    contentStyle={{ background: 'rgba(255, 255, 255, 80)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
                    date="Project"
                    iconStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
                    icon={<FaCss3 />}
                >
                    <h3 className="vertical-timeline-element-title text-lg text-black font-bold">Currency Converter</h3>
                    <h4 className="vertical-timeline-element-subtitle text-black">JS project</h4>
                    <img src={Currency} className='my-2 rounded-xl'/>
                    <p className='text-black'>This project uses an API to display curreny rates between diffenrent currencies</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work rounded-xl"
                    contentStyle={{ background: 'rgba(255, 255, 255, 80)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
                    date="Project"
                    iconStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
                    icon={<FaJs />}
                >
                    <h3 className="vertical-timeline-element-title text-lg text-black font-bold">Hangman Game</h3>
                    <h4 className="vertical-timeline-element-subtitle text-black">JS project</h4>
                    <img src={hangman} className='my-2 rounded-xl'/>
                    <p className='text-black'>This project allowed me to understand concepts about js like DOM manupilation and functioning of event listners</p>
                </VerticalTimelineElement>
                <StarsCanvas />

                <VerticalTimelineElement
                    className="vertical-timeline-element--work rounded-xl"
                    contentStyle={{ background: 'rgba(255, 255, 255, 80)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
                    date="Project"
                    iconStyle={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}
                    icon={<FaReact />}
                    position="right"
                >
                    <h3 className="vertical-timeline-element-title text-lg text-black font-bold">Doctor Appointment</h3>
                    <h4 className="vertical-timeline-element-subtitle text-black">Reactjs project</h4>
                    <img src={hangman} className='my-2 rounded-xl'/>
                    <p className='text-black'>This is an intermediate project and dables with complex react concepts, like Routes, responsiveness, etc.</p>
                </VerticalTimelineElement>

            </VerticalTimeline>
            <StarsCanvas />
            </div>
        </div>
    );
};

export default Work;
