import React from 'react'
import mdhome1 from '../assets/mdhome1.jpeg'
import mdhome2 from '../assets/mdhome2.jpeg'
import mdhome3 from '../assets/mdhome3.jpeg'
import mdhome4 from '../assets/mdhome4.jpeg'
import mdhome5 from '../assets/mdhome5.jpeg'
import mdhome6 from '../assets/mdhome6.jpeg'
import mdhome7 from '../assets/mdhome7.jpeg'
import mdhome8 from '../assets/mdhome8.jpeg'
import mdhome9 from '../assets/mdhome9.jpeg'
import mdhome10 from '../assets/mdhome10.jpeg'


const Home = () => {
  return (
    <section className="py-[5%] px-[12%]">

        <div className="grid gap-4 lg:grid-cols-2 md: pb-[10%]"> {/* section 1  */}
            <div>
                <img className="w-[100%]" src={mdhome1} alt="Doodle cups"/>
            </div>

            <div className="ml-[2%] sm:w-[80%]">
                <h1 className="font-extrabold text-4xl w-[100%]"> McCafé® x Doodles® holiday cups</h1>
                <p className="py-5 font-extralight text-md"> Let the festivities begin with 3 new designs—pair yours with any <span className="text-blue-600 underline"> hot McCafé drink</span>.
                Order it in the app and sip into the magical world of Doodles.
                </p>
                <p className="text-[9px] font-light"> ©2024 Doodles, LLC. DOODLES ® is a registered trademark of Doodles, LLC. All rights reserved.</p>

                <button className="bg-[#ffbc0d] font-light px-12 py-3 rounded-[5px] text-md my-10"> Order in the App </button>
            </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 md: pb-[10%]"> {/* section 2  */}
            <div>
                <img className="" src={mdhome2} alt="Nuggets"/>
            </div>

            <div className="ml-[2%]">
                <h1 className="font-extrabold text-4xl w-[100%]"> Omg for 1? </h1>
                <p className="py-5 font-extralight text-md"> 10 Chicken McNuggets® for $1, that is. <span className="font-bold"> Get ‘em only in the app</span>,
                once a week.* Just place a mobile order or provide the 4-digit deal code at the restaurant.
                </p>
                <p className="text-[9px] font-light"> Valid 1x/week thru 12/2/2024 at participating McDonald's. Excludes delivery. McDonald's app download and registration required. Must opt in to Rewards.</p>

                <button className="bg-[#ffbc0d] font-light px-12 py-3 rounded-[5px] text-md my-10"> Use Deal in the App </button>

            </div>
        </div>
        
        <div className="grid gap-4 lg:grid-cols-2 md: pb-[10%]"> {/* section 2  */}
            <div>
                <img className="" src={mdhome3} alt="Give thanks Meal"/>
            </div>

            <div className="ml-[2%]">
                <h1 className="font-extrabold text-4xl w-[100%]"> Give thanks to the Meal Deal</h1>
                <p className="py-5 font-extralight text-md">A 4 pc. McNuggets®, small fries & drink + a McChicken® or McDouble® <span className="font-bold"> starts at $5. </span>
                * So yeah, shoutout to the Meal Deal.
                </p>
                <p className="text-[9px] font-light"> *Prices and participation may vary. McDouble Meal Deal $6 in some areas. ©2024 The Coca-Cola Company. “Coca-Cola” is a registered trademark of The Coca-Cola Company.</p>

                <button className="bg-[#ffbc0d] font-light px-12 py-3 rounded-[5px] text-md my-10"> Get the Meal in the App </button>

            </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 md: pb-[10%]"> {/* section 2  */}
            <div>
                <img className="" src={mdhome4} alt="Dulce de Leche Frappe"/>
            </div>

            <div className="ml-[2%]">
                <h1 className="font-extrabold text-4xl w-[100%]"> Meet the new Dulce de Leche Frappé </h1>
                <p className="py-5 font-extralight text-md"> New flavor, new you? Try the <span className="font-bold">Dulce de Leche Frappé</span>
                —it's sweet, decadent and ready to make your day.*
                </p>
                <p className="text-[9px] font-light"> *At participating McDonald's for a limited time. </p>

                <button className="bg-[#ffbc0d] font-light px-12 py-3 rounded-[5px] text-md my-10"> Order Now </button>

            </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 md: pb-[10%]"> {/* section 2  */}
            <div>
                <img className="" src={mdhome5} alt="rmhc"/>
            </div>

            <div className="ml-[2%]">
                <h1 className="font-extrabold text-4xl w-[100%]"> 50 years of Ronald McDonald House Charities®</h1>
                <p className="py-5 font-extralight text-md"> McDonald’s is proud to be a Founding and Forever Partner of the <span className="text-blue-600 underline">Ronald McDonald House Charities</span>,
                but it’s difficult to make a difference without your efforts. Thank you for impacting the lives of families when they need it most—in 2023, your donations helped raise over $200 million which 
                provided over 2 million overnight stays.
                </p>
                <p className="py-2 font-extralight text-md"> 
                Continue leaving your mark with a gift to RMHC by selecting National RMHC Donation from the menu in the app or rounding up your order at the counter and Drive Thru.  
                </p>

                <button className="bg-[#ffbc0d] font-light px-12 py-3 rounded-[5px] text-md my-10"> Donate Now </button>

            </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 md: pb-[10%]"> {/* section 2  */}
            <div>
                <img className="" src={mdhome6} alt="Dulce de Leche Frappe"/>
            </div>

            <div className="ml-[2%]">
                <h1 className="font-extrabold text-4xl w-[100%]"> Free large Fries w/ $1 min. purchase </h1>
                <p className="py-5 font-extralight text-md"> Free large Fries to keep you company. Download the app and <span className="font-bold"> get 'em with your first purchase </span>
                of $1+.* Every $1 you spend earns 100 points, redeemable for free food.
                </p>
                <p className="text-[9px] font-light"> *Offer valid 1x thru the last day of month for first time app users at participating McDonald’s. May take up to 48 hours to appear in your deals. Must opt in to Rewards. Excludes tax.</p>

                <button className="bg-[#ffbc0d] font-light px-12 py-3 rounded-[5px] text-md my-10"> Get Free Large Fries in the App </button>

            </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 md: pb-[10%]"> {/* section 2  */}
            <div>
                <img className="" src={mdhome7} alt="Dulce de Leche Frappe"/>
            </div>

            <div className="ml-[2%]">
                <h1 className="font-extrabold text-4xl w-[100%]"> ‘More Black Designers’ is the New Black </h1>
                <p className="py-5 font-extralight text-md">The 2024 McDonald’s Change of Fashion Program is focused on driving change when 
                it comes to Black representation in fashion. The industry frequently pulls inspiration from Black culture, but doesn’t always 
                embrace Black creatives. After all, only 7.3% of American fashion designers are Black.*
                </p>
                <p className="py-2 font-extralight text-md"> So, we’re pairing five, rising Black designers with five fashion insiders for career-changing mentorships. The program will 
                    also provide access and resources, and give their brands a chance to shine.</p>
                <p className="text-[9px] font-light"> *Per <span className="text-blue-600 underline">Zippia.com</span> as of 2021.</p>

                <button className="bg-[#ffbc0d] font-light px-12 py-3 rounded-[5px] text-md my-10"> Follow on Instagram @weargolden </button>

            </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 md: pb-[10%]"> {/* section 2  */}
            <div>
                <img className="" src={mdhome8} alt="Dulce de Leche Frappe"/>
            </div>

            <div className="ml-[2%]">
                <h1 className="font-extrabold text-4xl w-[100%]">“McD’s Best Burgers Ever.” - Hamburglar</h1>
                <p className="py-5 font-extralight text-md"> You’re gonna love the hotter, juicier, tastier upgrades we’ve made to burgers like our Cheeseburger and 
                Double Cheeseburger.* From patties grilled with onions and perfectly melted cheese to new soft, pillowy buns—these are our best burgers yet. Ask the 
                Hamburglar, he can’t keep his hands off of ‘em. Robble, robble.
                </p>
                <p className="py-2 font-extralight text-md">Get one today in the app for pickup or McDelivery®.^</p>
                <p className="text-[9px] font-light"> *Comparison of McDonald’s classic burgers to prior burgers. </p>
                <p className="text-[9px] font-light">^At participating McDonald’s. McDelivery prices may be higher than at restaurants. Delivery/other fees may apply.</p>

                <button className="bg-[#ffbc0d] font-light px-12 py-3 rounded-[5px] text-md my-10"> Order in the App </button>

            </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 md: pb-[10%]"> {/* section 2  */}
            <div>
                <img className="" src={mdhome9} alt="Dulce de Leche Frappe"/>
            </div>

            <div className="ml-[2%]">
                <h1 className="font-extrabold text-4xl w-[100%]"> New: Faster Faves, Only in the App </h1>
                <p className="py-5 font-extralight text-md"> We now prep when you’re on the way if you choose 
                Curbside, Front Counter—or dine in for Table Service. Just order ahead in the app to save time. 
                Because waiting in line for faves? Not our thing either.*
                </p>
                <p className="text-[9px] font-light"> *At participating McDonald’s. </p>

                <button className="bg-[#ffbc0d] font-light px-12 py-3 rounded-[5px] text-md my-10"> Order Ahead in the App </button>

            </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 md: pb-[10%]"> {/* section 2  */}
            <div>
                <img className="" src={mdhome10} alt="Dulce de Leche Frappe"/>
            </div>

            <div className="ml-[2%]">
                <h1 className="font-extrabold text-4xl w-[100%]"> Deals for Days </h1>
                <p className="py-5 font-extralight text-md"> Get <span className="text-blue-600 underline"> exclusive deals </span>
                on your McDonald’s favorites in the app with contactless Mobile Order & Pay* and convenient Drive Thru or Curbside pickup.
                </p>
                <p className="text-[9px] font-light"> *Mobile Order & Pay at participating McDonald’s. </p>

                <button className="bg-[#ffbc0d] font-light px-12 py-3 rounded-[5px] text-md my-10"> Get App Deals </button>

            </div>
        </div>



    </section>
  )
}

export default Home