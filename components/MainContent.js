import Link from 'next/link';
import React from 'react';

const MainContent = () => {
    return (
        <section id='hero'>
            <div className='w-full flex flex-col pt-10 pb-20 self-center'>
                <div className='w-full flex flex-col-reverse md:flex-row md:h-48 h-auto md:pt-8 pt-0'>
                    <img src='/girlWriting.png' alt='image'
                        className='w-full md:w-64 h-60 z-10 border-[3px] border-mySkyBlue rounded-br-[130px]' />
                    <div className='flex flex-col md:flex-row items-center md:items-start md:ml-8 mt-4'>
                        <div className='flex flex-col items-center md:ml-8 ml-0'>
                            <p className='text-white font-semibold tracking-wide text-4xl font-serif pb-6'>
                                Content <span className='text-myGreen'>Writing</span>
                            </p>
                            <p className='text-white text-center md:text-start font-semibold tracking-wide text-3xl md:text-4xl font-serif pb-6'>
                                Services You Can Trust
                            </p>
                        </div>
                        <div className="star lg:ml-16 md:ml-0 hidden md:block" />
                    </div>
                </div>

                <div className='w-full flex flex-col md:flex-row md:pl-16 mt-8'>
                    <img src='/girlWriting2.png' alt='image'
                        className='w-full md:w-[450px] h-64 border-[3px] border-myGreen rounded-bl-[80px] rounded-tr-[80px]' />
                    <div className='flex flex-col items-center md:ml-16 mt-8'>
                        <p className='text-textGrey font-medium pb-6 lg:w-96 w-60 text-center'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                        <Link href="#contact">
                            <button className="text-myGreen border-button w-32 hover:bg-myGreen hover:text-bgGreen font-semibold
                            tracking-wider mt-4">Hire me</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainContent;

// import Link from 'next/link';
// import React from 'react';

// const MainContent = () => {
//     return (
//         <section id='hero'>
//             <div className='w-full flex flex-col pt-10 pb-20 self-center'>
//                 <div className='w-full flex md:flex-row flex-col-reverse md:h-48 pt-8'>
//                     <img src='/girlWriting.png' alt='image'
//                         className='w-full md:w-64 h-60 z-10 border-[3px] border-mySkyBlue rounded-br-[130px]' />
//                     <div className='flex flex-row items-center md:items-start md:ml-8 mt-4'>
//                         <div className='flex flex-col items-center pl-20'>
//                             <p className='text-white font-semibold tracking-wide text-4xl font-serif pb-6'>
//                                 Content <span className='text-myGreen'>Writing</span>
//                             </p>
//                             <p className='text-white font-semibold tracking-wide text-4xl font-serif pb-6'>
//                                 Services You Can Trust
//                             </p>
//                         </div>
//                         <div className="star ml-16 hidden md:block" />
//                     </div>
//                 </div>

//                 <div className='w-full flex md:flex-row flex-col md:ml-16'>
//                     <img src='/girlWriting2.png' alt='image'
//                         className='w-[450px] h-64 border-[3px] border-myGreen rounded-bl-[80px] rounded-tr-[80px]' />
//                     <div className='flex flex-col items-center mt-8 ml-16'>
//                         <p className='text-textGrey font-medium pb-6 w-96 text-center'>
//                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//                         </p>
//                         <Link href="#contact">
//                             <button className="text-myGreen border-button w-28 hover:bg-myGreen hover:text-bgGreen font-semibold
//                             tracking-wider mt-4">Hire me</button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default MainContent;
