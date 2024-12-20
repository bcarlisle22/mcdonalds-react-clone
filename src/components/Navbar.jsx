import React from 'react'
import biglogo from '../assets/biglogo.jpg'
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { RiArrowDownSLine } from "react-icons/ri";



const Navbar = () => {
  return (
    <nav className="border-b-2">
        <div className="text-md font-light px-[12%] pt-4">

            <div className="flex">
                <div className="pr-10">
                    <a href="#">
                    <img className=""src={biglogo} alt="McDonald's logo"/>
                    </a>
                </div>

            <div className="hidden 2xl:block"> 
                <div className="font-extralight flex pb-[20px]">
                    <div className="flex text-sm pr-[30%]">
                        <ul className="flex space-x-3 items-center">
                            <li> <a href="#" className="flex items-center"> Language&nbsp;<RiArrowDownSLine /> </a></li>
                            <li> <a href="#"> Sign Up for Email </a></li>
                            <li> <a href="#"> Careers </a> </li>
                        </ul>
                    </div>

                    <div className="text-sm">
                        <ul className="flex space-x-5 items-center">
                            <li> <a href="#" className="flex items-center"><CiSearch /> &nbsp;Search </a></li>
                            <li><a href="#" className="flex items-center text-blue-600 underline"><FaLocationDot className="text-red-600"/> Find Your Restaurant</a></li>
                            <li><button className="flex items-center border border-[#ffbc0d] px-[28px] py-[10px] rounded-md bg-[#ffbc0d] font-light"><a href="#"> Order Now </a></button></li>
                        </ul>
                    </div>
                </div>
                <div className="font-light text-md">
                    <ul className="flex space-x-5">
                        <li><a href="#" className="flex items-center"> Our Menu&nbsp;<RiArrowDownSLine /></a> </li>
                        <li><a href="#"> Download App </a> </li>
                        <li><a href="#"> MyMcDonald's Rewards </a> </li>
                        <li><a href="#"> Exclusive Deal </a> </li>
                        <li><a href="#"> About Our Food </a> </li>
                        <li><a href="#"> McDelivery® </a> </li>
                        <li><a href="#"> Locate </a> </li>
                        <li><a href="#"> Gift Cards </a> </li>
                    </ul>
                </div>
            </div>


            </div>
        </div>
        <div>

        </div>
        
    </nav>
  )
}

// bg-[#ffbc0d] font-light px-12 py-3 rounded-[5px] text-md my-10

export default Navbar
