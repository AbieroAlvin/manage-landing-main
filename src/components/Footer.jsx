import { useState } from 'react'
import { toast } from "react-toastify";

import Logo from '../assets/images/logo.svg'
import { FaInstagram, FaSquareFacebook, FaYoutube, FaSquareTwitter, FaPinterest  } from "react-icons/fa6";

const Footer = () => {
    const [formData, setFormData] = useState({email: ''})

    const [errors, setErrors] = useState({})

    const validateForm = () => {
        let isValid = true
        const newErrors = {}

         // Validate email
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid Email Address";
        isValid = false;
      }

    setErrors(newErrors);
    return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (validateForm()) {
            toast.success("Email is sent successfully");
            setFormData({
                email: ""
              });
              console.log("Form Submitted successfully!", formData)
        } else {
            console.log("Form submission failed. Please check the errors");
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
   
  return (
    <div className="bg-DarkBlue w-full mx-auto flex items-center justify-center">
        <div className='flex w-full max-w-[1240px] items-center justify-between md:flex-row flex-col-reverse gap-8 py-12 md:px-6 px-4'>
            {/* logo */}
            <div className='flex flex-col justify-between gap-12'>
               <img src={Logo} alt="logo" className='fill-white stroke-white'/>
               <div className='flex gap-5 text-white '>
               <FaSquareFacebook size={25} className='cursor-pointer hover:scale-75 hover:text-orange-500'/>
               <FaYoutube size={25} className='cursor-pointer hover:scale-75 hover:text-orange-500'/>
               <FaSquareTwitter size={25} className='cursor-pointer hover:scale-75 hover:text-orange-500'/>
               <FaPinterest size={25} className='cursor-pointer hover:scale-75 hover:text-orange-500'/>
               <FaInstagram size={25} className='cursor-pointer hover:scale-75 hover:text-orange-500'/>
               </div>
            </div>

             {/* links */}
             <div className='text-[14px] flex md:flex-row flex-col md:gap-24 gap-8 justify-between'>
                <div>
                    <ul className='flex flex-col gap-6'>
                        <li className='cursor-pointer text-VaryLightGray hover:text-orange-500'>Home</li>
                        <li className='cursor-pointer text-VaryLightGray hover:text-orange-500'>Pricing</li>
                        <li className='cursor-pointer text-VaryLightGray hover:text-orange-500'>Products</li>
                        <li className='cursor-pointer text-VaryLightGray hover:text-orange-500'>About Us</li>
                    </ul>
                </div>
                <div>
                <ul className='flex flex-col gap-6'>
                    <li className='cursor-pointer text-VaryLightGray hover:text-orange-500'>Careers</li>
                    <li className='cursor-pointer text-VaryLightGray hover:text-orange-500'>Support</li>
                    <li className='cursor-pointer text-VaryLightGray hover:text-orange-500'>Privacy Policy</li>
                </ul>
                </div>
            </div>

            {/* form & copy */}
            <div className='flex flex-col justify-between '>
                <form onSubmit={handleSubmit} className='flex gap-4 relative'>
                    <div className=''>
                    <input
            type="email"
            name="email"
            placeholder='Updates in your inbox…'
            value={formData.email}
            onChange={handleChange}
            className="outline-none py-2 px-2  focus:outline-green-400 rounded-full"
          /> 
         </div>    
           <button type="submit" className='rounded-full py-2 px-6 bg-orange-500 text-white'>
            Go
           </button>
           {errors.email && (
            <span className="text-[10px] text-left pl-2 text-BrightRed font-semibold mt-2 absolute bottom-[-1.5rem]">
              {errors.email}
            </span>
          )} 
             </form>
                <div className='mt-12'>
                    <p className='text-[14px] text-end text-DarkGrayishBlue'>Copyright 2020. All Rights Reserved</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer