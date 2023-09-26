import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cardlist = () => {

    const [cards,setCards]=useState([]);
    useEffect(()=>{
        fetch('json/Donation.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])

// console.log(cards)
    return (
        <div className="grid grid-cols-4 gap-5">
            {
                cards.map(card=><Card key={card.id} card={card}/>)
            }
        </div>
    );
};

export default Cardlist;