import { useLoaderData, useParams } from "react-router-dom";


const Carddetails = () => {
    const cardsdata = useLoaderData();
    const { id } = useParams();
    const currentcard = cardsdata.find(currentcard => currentcard.id == id)
    console.log(currentcard)
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${currentcard.picture})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="">
                    <div className="max-w-md top-2/3 mt-[600px] mr-[900px]">
                        <button className="btn btn-primary">Donate</button>
                    </div>
                </div>
            </div>
            <h2 className="text-4xl">{currentcard.description}</h2>
        </div>
    );
};

export default Carddetails;