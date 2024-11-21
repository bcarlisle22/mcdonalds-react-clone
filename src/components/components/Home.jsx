import React from 'react'
import mdhome1 from '../assets/mdhome1.jpeg'
import mdhome2 from '../assets/mdhome2.jpeg'

const Home = () => {
  return (
    <section className="px-[20%] py-[5%]">

        <div className="flex pb-[10%]">
            <div>
                <img className="w-full" src={mdhome1} alt="Doodle cups"/>
            </div>

            <div className="ml-[2%]">
                <h1 className="font-extrabold text-4xl w-[100%]"> McCafé® x Doodles® holiday cups</h1>
                <p className="py-5 font-extralight text-md"> Let the festivities begin with 3 new designs—pair yours with any <span className="text-blue-600 underline"> hot McCafé drink</span>.
                Order it in the app and sip into the magical world of Doodles.
                </p>
                <p className="text-[9px] font-light"> ©2024 Doodles, LLC. DOODLES ® is a registered trademark of Doodles, LLC. All rights reserved.</p>

                <button className="bg-[#ffbc0d] font-light px-12 py-3 rounded-[5px] text-md my-10"> Order in App </button>
            </div>
        </div>

        <div className="flex pb-[10%]">
            <div>
                <img className="w-full" src={mdhome2} alt="Nuggets"/>
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
        

        

        
        


    </section>
  )
}

export default Home