'use client'

import { useState } from "react";
import TextInput from "./TextInput";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contentTitle: '',
        description: '',
    });

    const handleChange = (e) => {
        console.log(e.target)
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            contentTitle: '',
            description: '',
        });
    };

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="w-full sm:px-20 md:px-0 px-6">
                <TextInput
                    label={"Name"}
                    value={formData.name}
                    onChange={handleChange}
                    name={"name"}
                />
                <TextInput
                    label={"Email"}
                    value={formData.email}
                    onChange={handleChange}
                    name={"email"}
                />
                <TextInput
                    label={"Content Title"}
                    value={formData.contentTitle}
                    onChange={handleChange}
                    name={"contentTitle"}
                />
                <div className="relative my-4 w-full lg:w-[80%] md:w-[90%]">
                    <textarea rows="4" type="text" id={"description"}
                        class="block py-2.5 px-0 w-full text-sm text-textGrey bg-transparent border-0 border-b-2 border-textGrey appearance-none 
                        focus:outline-none focus:ring-0 focus:border-mySkyBlue peer"
                        placeholder=" "
                        value={formData.description}
                        onChange={handleChange}
                    />
                    <label for={"description"} class="absolute text-base duration-300 transform -translate-y-6 text-myGreen scale-75 top-3 -z-10 origin-[0] 
            peer-focus:left-0 peer-focus:text-base peer-focus:font-bold peer-focus:text-mySkyBlue peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                </div>
                <button type="submit" className="bg-myGreen button px-5 py-2 font-bold tracking-wide rounded-sm text-greenGrey">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;