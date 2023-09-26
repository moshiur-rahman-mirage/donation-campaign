import React, { useState } from 'react';
import Hero from '../Hero/Hero';
import Cardlist from '../Cardlist/Cardlist';

const Home = () => {

    const [cat, setCat] = useState("");
    const onSearchclick=(searchTerm)=>{
        setCat(searchTerm)
    }

    return (
        <div>
           <Hero onSearchclick={onSearchclick}/>
           <br></br>
           <div className='w-full mx-auto p-1'>
            <Cardlist cat={cat}/>
            </div>
           
        </div>
    );
};

export default Home;