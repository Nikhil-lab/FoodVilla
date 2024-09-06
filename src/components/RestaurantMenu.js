import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IMAGE_CDN } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () =>{

    //how to read dynamic 
    const params = useParams();
    const {id} = params;

    //Given an restaurant ID, return me restaurant details & menu Items.
    const [restaurant,menuItems] = useRestaurant(id);

    /*   Custom Hook is created for the below logic
    const [restaurant,setRestaurant] = useState(null);
    const [menuItems,setMenuItems] = useState([]);

    useEffect(()=>{
        getRestaurantInfo();
    },[])

    const getRestaurantInfo = async ()=>{
        try{
            const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId="+id);
            const json = await data.json();
            console.log(json);
    
            const requiredData = json?.data?.cards[2]?.card?.card?.info;
            const menuItems = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
            console.log(menuItems);
            setMenuItems(menuItems);
            setRestaurant(requiredData);
        }
        catch(e){
            console.error(e.message);
            navigate('/');
        }

    }
        */

    const dispatch = useDispatch();

    const addFoodItem = (item) =>{
        dispatch(addItem(item));
    }
       

    console.log(params);
    return (!restaurant) ? <Shimmer />: (
        <div className="flex flex-wrap">
            <div className="p-3 m-3">
                
                <h1 className="font-bold text-red-600 text-4xl"> {restaurant?.name} </h1>
                <h2> Restaurant Id:{params.id}</h2>
                <img className="w-96 h-80" src={IMAGE_CDN+restaurant?.cloudinaryImageId}></img>
                <h3>{restaurant?.areaName}</h3>
                <h3>{restaurant?.city}</h3>
                <h3 className="font-bold text-green-600">{restaurant?.costForTwoMessage}</h3>
                
            </div>
            

            {menuItems && <div className="menu-list p-3 m-3">
                <div className="flex justify-between"> 
                    <h1 data-testid="menu" className="font-bold text-gray-600">Menu</h1>
                </div>
                <ul className="list-disc">
                    {
                        menuItems.map((menu)=> (
                                     <>
                                        <li className="" key={menu.card.info.id}> 
                                            <h4 data-testid="menu-list">{menu.card.info.name} - 
                                                <button data-testid="menu-list-btn"
                                                    className="p-1 m-1 bg-purple-950 hover:bg-gray-700 text-white rounded-md size-auto"
                                                    onClick={()=> addFoodItem(menu.card.info)}>
                                                Add Item
                                                </button> 
                                            </h4>
                                        </li>
                                        {/* <img src={IMAGE_CDN+menu.card.info?.imageId} /> */}
                                    </>
                                ))
                    }

                </ul>

            </div>}
        </div>
    )
}

export default RestaurantMenu;

// Note:
// Use Object.values() when dealing with Objects. to iterate over the object.
//Use opitonal chaining whereever possible.