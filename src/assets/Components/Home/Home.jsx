import React, { useState } from 'react';
import Hero from '../Hero/Hero';
import Cardlist from '../Cardlist/Cardlist';

const Home = () => {

    const [cat,setCat]=useState([])
    const handleSearch=()=>{
      console.log(textInput.current.value)
    }

    return (
        <div>
           <Hero handleSearch={handleSearch}/>
           <br></br>
           <div className='w-full mx-auto p-1'>
            <Cardlist/>
            </div>
           
        </div>
    );
};

export default Home;