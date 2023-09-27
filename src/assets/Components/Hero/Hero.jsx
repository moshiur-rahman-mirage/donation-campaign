import { useState } from "react";


const Hero = ({onSearchclick}) => {


    const [searchTerm, setSearchTerm] = useState('');


    const handleSearch = () => {
        onSearchclick(searchTerm);
      };

    return (
        <div>
            <div className="relative">
                <img className="opacity-10 h-96 mx-auto w-[100%]" src="https://i.ibb.co/KKqnhMk/team.jpg" />
                <h1 className="absolute md:text-4xl text-2xl font-bold text-black top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                I Grow By Helping People In Need</h1>
               <div className="absolute text-4xl font-bold text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
                <br></br>
               <input className=" mr-5 input input-bordered" type="search" name="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
                <div className="bg-red-500 text-white px-4 rounded-md">
                <button onClick={handleSearch}>Search</button>
                </div>
               </div>
                

            </div>

        </div>
    );
};

export default Hero;