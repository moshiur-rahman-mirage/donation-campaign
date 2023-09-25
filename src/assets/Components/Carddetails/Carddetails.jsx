import { useLoaderData, useParams } from "react-router-dom";
import './Carddetails.css'

const Carddetails = () => {
    const cardsdata = useLoaderData();
    const { id } = useParams();
    const currentcard = cardsdata.find(currentcard => currentcard.id == id)
    console.log(currentcard)
    return (
        <div>
            {/* <div className="hero min-h-screen" style={{ backgroundImage: `url(${currentcard.picture})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="">
                    <div className="max-w-md top-2/3 mt-[600px] mr-[900px]">
                        <button className="btn btn-primary">Donate</button>
                    </div>
                </div>
            </div> */}

            <div className="image-container">
                <div >
                    <img src={currentcard.picture} alt="" />
                    <div className="overlay">
                        <button className="overlay-button" style={{background:`${currentcard.text_button_bg_color}`}}>Donate {currentcard.price}</button>
                    </div>
                </div>
            </div>
            <br/>
            <h2 className="text-4xl">{currentcard.title}</h2>
            <br/>
            <h2 className="text-xl">{currentcard.description}</h2>
            <br/>
        </div>
    );
};

export default Carddetails;