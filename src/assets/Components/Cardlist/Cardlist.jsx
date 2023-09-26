import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cardlist = ({cat}) => {

    const [cards,setCards]=useState([]);
    const [filteredCards, setFilteredCards] = useState(cards);
    useEffect(()=>{
        fetch('json/Donation.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[cards])

    useEffect(()=>{
        const filtered = cards.filter((card) =>
        card.category.toLowerCase()===cat.toLowerCase()
      );
      setFilteredCards(filtered);
      
    },[cards])




    // console.log(filteredCards)





// console.log(cards)
    return (
        <>
        <div className="lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5" style={{display:cat?'grid':'none'}}>
            {
                filteredCards.map(card=><Card key={card.id} card={card}/>)
            }
        </div>

        <div className="lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5" style={{display:cat?'none':'grid'}}>
            {
                cards.map(card=><Card key={card.id} card={card}/>)
            }
        </div>


        </>
    );
};

export default Cardlist;