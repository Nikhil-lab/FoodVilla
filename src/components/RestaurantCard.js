import { useContext } from "react";
import { IMAGE_CDN } from "../config";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({name,cloudinaryImageId,cuisines,avgRating,user2}) =>{
    const {user} = useContext(UserContext);
    return (
        <div className="card w-56 p-2 m-2 shadow-lg">
            <img className="h-52" src={IMAGE_CDN + cloudinaryImageId} />
            <h2 className="font-bold text-2xl">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>Ratings: {avgRating}</h4>
            <h5>{user.name}</h5>
            <h5>{user.email}</h5>
        </div>
    );
};

export default RestaurantCard;