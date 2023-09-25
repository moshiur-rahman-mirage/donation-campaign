import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getStoredDonation } from '../../Util/Util';
import DoneDonation from '../DoneDonation/DoneDonation';

const Donation = () => {
    const donations=useLoaderData();
    const [donations2,setDonations]=useState([])
    useEffect(()=>{
        const storedDonation=getStoredDonation();
        if (donations){
            const donationDone=donations.filter(donation=>storedDonation.includes(donation.id))
            setDonations(donationDone)
        }
    },[])
    console.log(donations2)
    return (
        <div className='grid grid-cols-2'>
            {
               
               donations2.map((donation)=><div key={donation.id} donation={donation}>
                    {/* {donation.id}
                    {donation.image}
                    <h2>Hello</h2> */}
                    {/* <div className='grid grid-cols-2 gap-4'>
                   <div className="card bg-base-100">
                       <figure><img src={donation.picture} alt="Shoes" /></figure>
                       <div className="card-body" style={{ backgroundColor: donation.card_bg_color }}>
                           <button className="text-left  px-2" style={{ color: donation.text_button_bg_color, backgroundColor: donation.category_bg_color }}>{donation.category}</button>
                           <h2 className="card-title" style={{ color: donation.text_button_bg_color }}>
                               {donation.title}
                           </h2>


                       </div>
                   </div>
                   </div> */}


                <Link to={`card/${donation.id}`}>
                <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={donation.picture} alt="Shoes" /></figure>
                <div className="card-body" style={{ backgroundColor: donation.card_bg_color }}>
                    <p className=" w-fit card-title text-sm" style={{ color: donation.text_button_bg_color, backgroundColor: donation.category_bg_color }}>{donation.category}</p>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-start">
                    <button className="btn" style={{background:`${donation.text_button_bg_color}`}}>View Details</button>
                    </div>
                </div>
                </div>
                </Link>



               </div>)
            }
        </div>
    );
};

export default Donation;