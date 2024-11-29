import React from 'react'
import biglogo from '../assets/biglogo.jpg'

const Navbar = () => {
  return (
    <nav className="border-b-2">
        <div className="text-md font-light px-[15%] pt-4">

            <div className="flex">
                <div className="pr-10">
                    <a href="#">
                    <img className=""src={biglogo} alt="McDonald's logo"/>
                    </a>
                </div>

            <div className="sm:hidden"> 
                <div className="font-extralight flex py-5">
                    <div className="flex text-sm pr-[30%]">
                    <a href="#" className="pr-6"> Language </a>
                    <a href="#" className="pr-6"> Sign Up for Email </a>
                    <a href="#" className="pr-6"> Careers </a>
                    </div>

                    <div className="text-sm">
                    <a href="#" className="pr-6"> Search </a>
                    <a href="#" className="pr-6"> Find Your Restaurant </a>
                    <button><a href="#" className="mr-6 bg-[#ffbc0d] font-light px-12 py-3 rounded-[5px] text-md my-10"> Order Now </a></button>
                    </div>
                </div>
                <div className="font-light text-md">
                    <a href="#" className="pr-4"> Our Menu </a>
                    <a href="#" className="pr-4"> Download App </a>
                    <a href="#" className="pr-4"> MyMcDonald's Rewards </a>
                    <a href="#" className="pr-4"> Exclusive Deals </a>
                    <a href="#" className="pr-4"> About Our Food </a>
                    <a href="#" className="pr-4"> McDelivery </a>
                    <a href="#" className="pr-4"> Locate </a>
                    <a href="#" className="pr-4"> Gift Cards </a>
                </div>
            </div>


            </div>
        </div>
        <div>

        </div>
        
    </nav>
  )
}

export default Navbar