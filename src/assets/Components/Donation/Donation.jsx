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
                    <div className='h-full'>
                <div className="card card-side bg-base-100 shadow-xl">
                <img className='rounded-e-none' src={donation.picture} alt="Shoes" />
                <div className="card-body h-full rounded-md" style={{ backgroundColor: donation.card_bg_color }}>
                <button className="text-left w-fit " style={{backgroundColor: donation.text_button_bg_color,color:donation.category_bg_color}}>{donation.category}</button>
                    <p className='text-xl font-bold'>{donation.title}</p>
                    <p className='font-bold'>${donation.price}</p>
                    <div className=" justify-start">
                    <button className="btn text-white" style={{ background:`${donation.category_bg_color}`}}>View Details</button>
                    </div>
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