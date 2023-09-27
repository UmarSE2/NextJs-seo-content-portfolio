import React from 'react'
import { RiFileTextLine } from 'react-icons/ri';
import { AiFillFileText, AiFillHdd } from 'react-icons/ai';
import { BiDesktop } from 'react-icons/bi';

const data = [
    {
        icon: <BiDesktop size={30} />,
        title: 'High Quality',
        desc: 'Elevate your content with our high-quality writing services, tailored to engage your audience and boost your online presence.',
    },
    {
        icon: <AiFillFileText size={30} />,
        title: 'SEO Optimized',
        desc: 'Harness the power of SEO with expertly crafted content, designed to rank higher and drive organic traffic to your website.',
    },
    {
        icon: <AiFillHdd size={30} />,
        title: 'Organic Content',
        desc: 'Nurture your online growth with organic content solutions, crafted to resonate with your target audience and build lasting connections.',
    },
    {
        icon: <RiFileTextLine size={30} />,
        title: 'Fast Service',
        desc: 'Get results in record time with lightning-fast content creation and SEO optimization services, ensuring you stay ahead in the digital race.',
    },
];

const Features = () => {
    return (
        <section id="features">
            <div className='w-full items-center justify-center flex flex-col text-center'>
                <div className='w-full md:w-[80%] lg:w-[80%] xl:w-[50%]'>
                    <h2 className='text-textGrey font-semibold text-lg pt-16 pb-8'>Explore My Features</h2>
                    <h1 className='text-myGreen font-serif font-bold tracking-wide text-3xl pb-8'>Crafting Words<span className='text-white'>,</span> Inspiring Worlds</h1>
                    <p className='text-textGrey font-medium leading-7'>
                        I excel in on-page and off-page optimization,
                        possess strong keyword research skills, and create engaging, informative content. Proficiency in Google Analytics
                        and SEO tools further distinguishes my capabilities
                    </p>
                </div>
                <div className="flex flex-row flex-wrap w-full py-12">
                    {data.map((item, index) => (
                        <div className="w-full md:w-1/2 lg:w-1/4 items-center justify-center hover:border rounded-sm border-mySkyBlue pb-10 flex flex-col px-6" key={index}>
                            <div className='text-myBlue bg-myGreen flex rounded-sm text-3xl w-12 h-12 justify-center items-center mt-6 mb-3'>
                                <div>{item.icon}</div>
                            </div>
                            <h3 className='text-white font-semibold text-lg'>{item.title}</h3>
                            <p className='text-textGrey font-medium pt-4'>{item.desc}</p>
                        </div>
                    ))}
                </div>
                <hr className='w-full border-mySkyBlue border-1.5 mt-4' />
            </div>
        </section>
    )
}

export default Features