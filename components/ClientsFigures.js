"use client"
import React from 'react';
import CountUp from 'react-countup';

function ClientsFigures() {
    return (
        <div className='w-full self-center bg-greenGrey text-center py-10 relative'>
            <div className='triangle'></div>
            <strong className='xl:text-[40px] md:text-[30px] text-myGreen font-bold'>Captivating Stories</strong>
            <div className='flex flex-col md:flex-row justify-evenly md:gap-x-6 mt-16 text-mySkyBlue'>
                <div className='mb-6 md:mb-0'>
                    <div className='text-2xl text-white xl:text-4xl font-extrabold mb-2'>
                        <CountUp start={0} end={500} duration={5} />+
                    </div>
                    <div className='text-xs uppercase tracking-[1px] leading-[1.4]'>Happy Clients</div>
                </div>
                <div className='mb-6 md:mb-0'>
                    <div className='text-2xl text-white xl:text-4xl font-extrabold mb-2'>
                        <CountUp start={0} end={100} duration={5} />+
                    </div>
                    <div className='text-xs uppercase tracking-[1px] leading-[1.4]'>Feedbacks</div>
                </div>
                <div className='mb-6 md:mb-0'>
                    <div className='text-2xl text-white xl:text-4xl font-extrabold mb-2'>
                        <CountUp start={0} end={3} duration={5} />+
                    </div>
                    <div className='text-xs uppercase tracking-[1px] leading-[1.4]'>Years of Experience</div>
                </div>
                <div className='mb-6 md:mb-0'>
                    <div className='text-2xl text-white xl:text-4xl font-extrabold mb-2'>
                        <CountUp start={0} end={1000} duration={5} />+
                    </div>
                    <div className='text-xs uppercase tracking-[1px] leading-[1.4]'>Successful Tasks</div>
                </div>
            </div>
        </div>
    );
}

export default ClientsFigures;
