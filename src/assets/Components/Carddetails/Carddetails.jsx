import { useLoaderData, useParams } from "react-router-dom";
import './Carddetails.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../../Util/Util";
import { useState } from "react";


const Carddetails = () => {
    const cardsdata = useLoaderData();
    const [donateCount,setDonateCount]=useState(0)
    console.log(donateCount)
    const { id } = useParams();
    const idInt=parseInt(id);
    const currentcard = cardsdata.find(currentcard => currentcard.id == id)
    const handleDonate=()=>{
        toast('Donated Successfully!',{
            position:"top-center"
        });
        saveDonation(idInt);
        setDonateCount(donateCount+1)
    }
    return (
        <div>

            <div className="image-container">
                <div >
                    <img src={currentcard.picture} alt="" />
                    <div className="overlay">
                        <button onClick={handleDonate} className="overlay-button lg:text-left md:text-left text-center" style={{background:`${currentcard.category_bg_color}`}}>Donate {currentcard.price}</button>
                    </div>
                </div>
            </div>
            <br/>
            <h2 className="text-4xl lg:text-left text-center">{currentcard.title}</h2>
            <br/>
            <h2 className="text-xl lg:text-left text-center">{currentcard.description}</h2>
            <br/>
            <ToastContainer/>
        </div>
    );
};

export default Carddetails;