import Image from "next/image"
import React from "react"
import ContactForm from "./ContactForm"

const page = () => {
    return (
        <section id="contact">
            <div className="w-full flex-col">
                <h2 className="font-bold text-myGreen font-serif md:text-4xl sm:text-3xl text-2xl pt-8 tracking-wide lg:px-64 text-center lg:leading-[60px]">
                    <span className="text-white">Converting</span> Visionary Concepts <span className="text-white">into</span> Captivating SEO Content</h2>
                <div className="flex md:flex-row flex-col w-full lg:px-24">
                    <div className="w-full flex flex-col mt-12">
                        <ContactForm />
                    </div>
                    <div className="w-full flex flex-row md:items-start items-center justify-center md:justify-end">
                        <img src={"/contactBg.png"} alt="image" className="w-[500px]" />
                    </div>
                </div>
                <hr className="w-full border-mySkyBlue border-1.5 mt-10" />
            </div>
        </section>
    )
}

export default page