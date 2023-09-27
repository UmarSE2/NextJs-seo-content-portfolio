import React from 'react';
import { RiFileTextLine } from 'react-icons/ri';
import { AiFillFileText, AiFillRead, AiFillHdd } from 'react-icons/ai';
import { BsFillClipboard2DataFill, BsArrowRight } from 'react-icons/bs';
import { BiDesktop } from 'react-icons/bi';

const servicesData = [
    {
        icon: <BiDesktop size={28} />,
        title: 'Search Engine Optimization',
        desc: 'I specializes in optimizing websites to improve their visibility on search engines, helping businesses reach a wider audience and increase online traffic.',
    },
    {
        icon: <BsFillClipboard2DataFill size={28} />,
        title: 'Website Rank',
        desc: 'I employ cutting-edge strategies to enhance your website ranking on search engine results pages, ensuring that your site is easily discoverable by potential customers.',
    },
    {
        icon: <AiFillFileText size={28} />,
        title: 'SEO Articles',
        desc: 'I specializes in creating SEO-optimized articles that provide to both search engine algorithms and your target audience. These articles are designed to boost your websites visibility in search results.',
    },
    {
        icon: <AiFillHdd size={28} />,
        title: 'Website Content',
        desc: 'I offer comprehensive website content services, ensuring that every page of your site is filled with relevant and engaging information. Our goal is to not only improve your search engine rankings but also create a user-friendly experience.',
    },
    {
        icon: <RiFileTextLine size={28} />,
        title: 'Blog Posts',
        desc: 'I am skilled at crafting informative and engaging blog posts. These posts are according to your industry, providing your audience with valuable insights, news, and updates. I ensures that your blog attracts organic traffic.',
    },
    {
        icon: <AiFillRead size={28} />,
        title: 'Personal Writing',
        desc: 'I offer personalized writing services tailored to your unique needs, whether its crafting compelling website copy, informative articles, or engaging blog posts to help you connect with your target audience effectively.',
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
                                className='relative bg-greenGrey p-6 w-full h-96 overflow-hidden rounded shadow-md flex flex-col 
                                transition-all duration-150 transform group'>
                                <div className='text-bgGreen bg-myGreen flex rounded-sm text-3xl w-10 h-10 justify-center items-center'>
                                    <div>{service.icon}</div>
                                </div>
                                <h3 className='text-xl font-semibold text-textRed text-white pt-6'>{service.title}</h3>
                                <p className='text-textGrey pt-8'>{service.desc}</p>
                                <button className='self-end hidden items-center bg-myGreen text-greenGrey rounded px-2 py-1 absolute bottom-6
                                group-hover:flex transition-all duration-1000 delay-300 font-semibold'>
                                    Read More <span className="ml-3 hover:-rotate-45"><BsArrowRight size={18} /></span>
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