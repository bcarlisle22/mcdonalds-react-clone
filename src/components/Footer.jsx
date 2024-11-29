import React from 'react'

const Footer = () => {
  return (
    <section className="py-[2%] hidden sm:block">
        <div className="flex px-[12%]">

            <div className="text-md px-[5%]">
                <h1 className="font-semibold pb-[15px]">About Us</h1>
                <ul className="font-extralight">
                    <li><a href="#">About Us Overview </a></li>
                    <li><a href="#">Leadership Team </a></li>
                    <li><a href="#">Values In Action </a></li>
                    <li><a href="#">Franchising info </a></li>
                    <li><a href="#">Recalls & Alerts</a></li>
                    <li><a href="#">Real Estate</a></li>
                    <li><a href="#">Accessibility</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">News & Notifications </a></li>
                </ul>
            </div>

            <div className="text-md px-[5%]">
                <h1 className="font-semibold pb-[15px]"> Services </h1>
                <ul className="font-extralight">
                    <li><a href="#">Services Overview </a></li>
                    <li><a href="#"> Delivery Partners </a></li>
                    <li><a href="#"> Wi-Fi </a></li>
                    <li><a href="#">PlayPlaces & Parties </a></li>
                    <li><a href="#">Mobile Order & Pay </a></li>
                    <li><a href="#"> Trending Now </a></li>
                    <li><a href="#">McDonald's Merchandise </a></li>
                    <li><a href="#"> Family Fun Hub</a></li>
                    <li><a href="#"> MyMcdonald's Rewards </a></li>
                    <li><a href="#">McCafé® </a></li>
                </ul>
            </div>

            <div className="text-md px-[5%]">
                <h1 className="font-semibold pb-[15px]"> Community </h1>
                <ul className="font-extralight">
                    <li><a href="#">Community Overview </a></li>
                    <li><a href="#"> Now Serving </a></li>
                    <li><a href="#"> Scholarship Overview </a></li>
                    <li><a href="#">  Ronald McDonald House Charities® </a></li>
                    <li><a href="#">McDonald’s International</a></li>
                </ul>
            </div>

            <div className="text-md px-[5%]">
                <h1 className="font-semibold pb-[15px]"> Contact Us </h1>
                <ul className="font-extralight">
                    <li><a href="#">Contact Us Overview</a></li>
                    <li><a href="#"> Gift Card FAQs</a></li>
                    <li><a href="#"> Donations </a></li>
                    <li><a href="#">  Employment </a></li>
                    <li><a href="#"> Customer Feedback </a></li>
                    <li><a href="#"> Frequently Asked Questions</a></li>
                </ul>
            </div>

        </div>

    </section>
  )
}

export default Footer