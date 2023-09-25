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
    const [datalength,setDataLength]=useState(4)
    const handleShowAll=()=>{
        const totalData=donations2.length;
        setDataLength(totalData)
    }
    return (
        <div>
                    <div className='grid grid-cols-2 gap-5'>
            {
               
               donations2.slice(0,datalength).map((donation)=><div key={donation.id} donation={donation}>

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
        <div className='flex flex-1'>
            <button className='btn btn-success mx-auto my-5' style={{ display: datalength>4 ? 'none' : 'block' }} onClick={handleShowAll}>Show All</button>
            </div>
        </div>
    );
};

export default Donation;