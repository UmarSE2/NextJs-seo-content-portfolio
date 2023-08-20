import React from 'react';

const MainContent = () => {
    return (
        <div className='w-full flex items-start my-10 lg:mb-96 lg:px-40 md:px-20 px-6 pt-10'>
            <div className='w-full flex md:flex-row flex-col items-start relative'>
                <div className=''>
                    <img src='/girlWriting.png' alt='image'
                        className='h-60 w-64 border-[3px] border-mySkyBlue rounded-br-[130px] absolute z-10'
                    />
                    <img src='/girlWriting2.png' alt='image'
                        className='h-60 w-[420px] border-[3px] border-myGreen rounded-bl-[80px] rounded-tr-[80px] absolute top-[160px] left-[100px]'
                    />
                </div>
                <div className='ml-24 relative lg:left-[220px] flex flex-col z-20 items-center pt-6 md:mt-0 mt-[450px] w-full'>
                    <p className='text-white font-semibold tracking-wide text-4xl font-serif pb-6'>
                        Content <span className='text-myGreen'>Writing</span>
                    </p>
                    <p className='text-white font-semibold tracking-wide text-3xl font-serif text-center'>
                        Services You Can Trust
                    </p>
                </div>
                <div className='w-full relative lg:top-[180px] top-10 z-20'>
                    <p className='text-textGrey text-center font-medium text-bse px-14'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
