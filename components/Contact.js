import Image from "next/image"
import React from "react"
import ContactForm from "./ContactForm"

const page = () => {
    return (
        <section id="contact">
            <div className="w-full flex-col">
                <h2 className="font-bold text-myGreen font-serif md:text-4xl sm:text-3xl text-2xl pt-8 tracking-wide xl:px-64 lg:px-40 text-center lg:leading-[50px]">
                    <span className="text-white">Converting</span> Visionary Concepts <span className="text-white">into</span> Captivating SEO Content</h2>
                <div className="flex md:flex-row flex-col w-full lg:px-24">
                    <div className="w-full flex flex-col mt-12">
                        <ContactForm />
                    </div>
                    <div className="w-full flex flex-row md:items-start items-center justify-center md:justify-end">
                        <Image width={500} height={400} src={"/contactBg.png"} alt="image" className="w-auto h-[30rem]" />
                    </div>
                </div>
                <hr className="w-full border-mySkyBlue border-1.5 mt-10" />
            </div>
        </section>
    )
}

export default page