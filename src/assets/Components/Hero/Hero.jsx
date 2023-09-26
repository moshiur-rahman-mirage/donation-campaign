import { useState } from "react";


const Hero = ({handleSearch}) => {
    const [searchTerm,setSearchTerm]=useState('');


    return (
        <div>
            <div className="relative">
                <img className="opacity-10 h-96 mx-auto w-[100%]" src="https://www.kindacode.com/wp-content/uploads/2022/06/night-sky.jpeg" />
                <h1 className="absolute text-4xl font-bold text-black top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                I Grow By Helping People In Need</h1>
               <div className="absolute text-4xl font-bold text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
                <br></br>
               <input className=" mr-5 input input-bordered" type="text" name="search"></input>
                <div className="bg-red-500 text-white px-4 rounded-md">
                <button onChange={handleSearch}>Search</button>
                </div>
               </div>
                

            </div>

        </div>
    );
};

export default Hero;