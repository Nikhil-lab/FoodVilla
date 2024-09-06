import { IMAGE_CDN } from "../config";

const FoodItem = ({name,description,imageId,cuisines,price}) =>{
    return (
        <div className="card w-56 p-2 m-2 shadow-lg">
            <img className="h-52" src={IMAGE_CDN + imageId} />
            <h2 className="font-bold text-2xl">{name}</h2>
            <h4>Price: Rs.{price}</h4>
            <h5>{description}</h5>
        </div>
    );
};

export default FoodItem;