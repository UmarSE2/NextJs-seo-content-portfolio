import React from 'react';
import { RiFileTextLine } from 'react-icons/ri';
import { AiFillFileText, AiFillRead, AiFillHdd } from 'react-icons/ai';
import { BsFillClipboard2DataFill, BsArrowRight } from 'react-icons/bs';
import { BiDesktop } from 'react-icons/bi';

const servicesData = [
    {
        icon: <BiDesktop size={28} />,
        title: 'Website Content',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        icon: <AiFillFileText size={28} />,
        title: 'SEO Article',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        icon: <AiFillHdd size={28} />,
        title: 'Homework & Assignments',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        icon: <RiFileTextLine size={28} />,
        title: 'Research Papers',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        icon: <BsFillClipboard2DataFill size={28} />,
        title: 'Thesis',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        icon: <AiFillRead size={28} />,
        title: 'Exam Preparation Service',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
];

const Services = () => {

    return (
        <section id="services">
            <div className='py-8 w-full mt-4 flex flex-col justify-center items-center'>
                <div className='flex flex-row justify-center items-center text-textGrey'>
                    <div className='border-2 border-textRed w-12' />
                    <p className='text-textRed px-2 text-sm'>WHAT I OFFER </p>
                    <div className='border-2 border-textRed w-12' />
                </div>
                <div className='w-full flex flex-col justify-center items-center'>
                    <h2 className='text-white text-center text-3xl font-bold my-4 font-serif'>I{`'`}m Here to Write for You</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 xl:px-20'>
                        {servicesData.map((service, index) => (
                            <div key={index}
                                className='relative bg-greenGrey p-6 w-full h-80 overflow-hidden rounded shadow-md flex flex-col 
                            transition-all duration-150 transform group'>
                                <div className='text-bgGreen bg-myGreen flex rounded-sm text-3xl w-10 h-10 justify-center items-center'>
                                    <div>{service.icon}</div>
                                </div>
                                <h3 className='text-xl font-semibold text-textRed text-white pt-6'>{service.title}</h3>
                                <p className='text-textGrey pt-8'>{service.desc}</p>
                                <button className='self-end flex items-center bg-myGreen text-greenGrey rounded px-2 py-1
                            translate-y-[400%] group-hover:translate-y-16 transition-all duration-300 delay-150 font-semibold'>
                                    Read More <span className="ml-3"><BsArrowRight size={18} /></span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className='w-full border-mySkyBlue border-1.5 mt-10' />
            </div>
        </section>
    );
};

export default Services;