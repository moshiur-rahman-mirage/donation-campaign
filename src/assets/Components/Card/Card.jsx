import { Link } from "react-router-dom";


const Card = ({ card }) => {
    const { id, title, picture, category, category_bg_color,text_button_bg_color, description, price, card_bg_color } = card
    return (
        <Link to={`card/${id}`}>
            <div className="md:card card-side bg-base-100 w-auto">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body" style={{backgroundColor: card_bg_color}}>
                    <button className="md:text-left text-center w-fit px-2" style={{backgroundColor: text_button_bg_color,color:category_bg_color}}>{category}</button>
                    <h2 className="card-title" style={{color: category_bg_color}}>
                        {title}
                    </h2>
                   

                </div>
            </div>
        </Link>
    );
};

export default Card;