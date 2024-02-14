import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from '../assets/images/logo.svg'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => setOpen(!open)
  return (
    <div className="mx-auto w-full bg-transparent">
       <nav className="w-full mx-auto flex justify-between items-center py-6 px-2 max-w-[1240px]">
         {/* Left Side */}
         <div className="flex items-center justify-between w-full md:w-auto px-4">
          <img src={Logo} alt="Logo" />
          {/* open & close */}
          <div onClick={() => handleClick()} className="md:hidden z-50">
              {open ? (<FaTimes size={25} className="text-VeryDarkBlue cursor-pointer"/>) : (<FaBars size={25} className="text-VeryDarkBlue cursor-pointer" />)}
          </div>
         </div>

         {/* Navigation */}
         <div className="hidden md:flex">
          <ul className="flex justify-between space-x-10 text-[14px] items-center text-black">
          <li>
                <a href="#" className="hover:underline underline-offset-8 text-GrayishBlue">
                  Pricing
                </a>
              </li>
          <li>
                <a href="#" className="hover:underline underline-offset-8 text-GrayishBlue">
                  Product
                </a>
              </li>
          <li>
                <a href="#" className="hover:underline underline-offset-8 text-GrayishBlue">
                  About Us
                </a>
              </li>
          <li>
                <a href="#" className="hover:underline underline-offset-8 text-GrayishBlue">
                  Careers
                </a>
              </li>
          <li>
                <a href="#" className="hover:underline underline-offset-8 text-GrayishBlue">
                  Community
                </a>
              </li>
          </ul>
         </div>

         {/* Button */}
         <div className="hidden md:flex">
          <button className="rounded-full text-[15px] px-8 py-2.5 text-white bg-orange-600 shadow-lg">Get Started</button>
         </div>

         {/* Mobile Menu */}
         {/* overlay */}
         {open ? (
            <div className="bg-DarkBlue/50 fixed top-0 w-full h-full z-10  left-0"></div>
          ) : (
            ""
          )}

          {/* Side Drawer Menu */}
          <div className={`fixed top-[100px] w-3/4 h-[40%] z-50  duration-500 bg-white ease-in-out p-[24px] rounded-md ${open ? "left-[80px]" : "left-[-100%]"}`}>
                <ul className="flex flex-col justify-between text-center gap-6 text-black font-bold">
                <li>
                <a href="#" className="hover:underline underline-offset-8 text-GrayishBlue">
                  Pricing
                </a>
              </li>
          <li>
                <a href="#" className="hover:underline underline-offset-8 text-GrayishBlue">
                  Product
                </a>
              </li>
          <li>
                <a href="#" className="hover:underline underline-offset-8 text-GrayishBlue">
                  About Us
                </a>
              </li>
          <li>
                <a href="#" className="hover:underline underline-offset-8 text-GrayishBlue">
                  Careers
                </a>
              </li>
          <li>
                <a href="#" className="hover:underline underline-offset-8 text-GrayishBlue">
                  Community
                </a>
              </li>
                </ul>
          </div>
       </nav>
    </div>
  )
}

export default Navbar