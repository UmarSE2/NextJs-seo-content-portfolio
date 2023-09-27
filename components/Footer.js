import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="flex flex-wrap w-full py-8 justify-around font-serif sm:col-span-4 text-textGrey xl:px-20 lg:px-6 px-2">
            <div className="w-full md:w-1/2 lg:w-1/4 p-4 lg:items-start md:items-center items-start flex flex-col cursor-default">
                <h2 className="font-semibold text-3xl mb-2 text-myGreen">GulWrites</h2>
                <p className="mb-4 lg:text-left text-left tracking-wide sm:text-center">
                    Fueling digital success through the art of SEO and the magic of compelling content.
                </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-auto p-4 lg:items-start md:items-center items-start flex flex-col">
                <h2 className="font-semibold text-xl mb-3 text-myGreen cursor-default">Get in Touch</h2>
                <div className='flex flex-row mb-2 md:mb-0 py-2'>
                    <BsWhatsapp size={22} className="text-myGreen" />
                    <p className='pl-4 text-sm'>+92 300 1234567</p>
                </div>
                <div className='flex flex-row pt-2'>
                    <AiOutlineMail size={22} className="text-myGreen" />
                    <p className='pl-4 text-sm'>helloworld@gmail.com</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-auto p-4 md:items-center items-start flex flex-col md:mt-0 mt-4">
                <h2 className="font-semibold text-xl mb-2 text-myGreen cursor-default">Availability</h2>
                <div className='text-textGrey cursor-default button border-2 border-mySkyBlue flex rounded-full text-2xl w-16 h-16 justify-center items-center my-2'>
                    <p>24/7</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-auto p-4 md:items-center items-start flex flex-col">
                <h2 className="font-semibold text-xl mb-2 text-myGreen cursor-default">Follow Me</h2>
                <div className="flex space-x-4 items-center mt-2">
                    <div>
                        <AiFillLinkedin size={38} className="button cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
