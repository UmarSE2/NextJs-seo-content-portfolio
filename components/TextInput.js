import React from 'react'

const TextInput = ({ label, value, onChange, name }) => {
    return (
        <div class="relative w-full lg:w-[80%] mt-4 py-2">
            <input type="text" id={name}
                className="block py-2.5 px-0 w-full text-sm text-textGrey bg-transparent border-0 border-b-2 border-textGrey appearance-none 
                focus:outline-none focus:ring-0 focus:border-mySkyBlue peer"
                placeholder=" "
                value={value}
                onChange={onChange}
            />
            <label for={name} className="absolute text-base duration-300 transform -translate-y-6 text-myGreen scale-75 top-3 -z-10 origin-[0] 
            peer-focus:left-0 peer-focus:text-base peer-focus:font-bold peer-focus:text-mySkyBlue peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{label}</label>
        </div>
    )
}

export default TextInput