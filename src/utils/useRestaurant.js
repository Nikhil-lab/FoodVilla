import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FETCH_MENU } from "../config";

const useRestaurant = (resId) =>{

    const[restaurant,setRestaurant] = useState();
    const [menuItems,setMenuItems] = useState([]);
    const navigate = useNavigate();

    //get data from API
    useEffect(()=>{
        getRestaurantInfo();
    },[])

    const getRestaurantInfo = async ()=>{
        try{
            const data = await fetch(FETCH_MENU+resId);
            const json = await data.json();
            console.log(json);
    
            const requiredData = json?.data?.cards[2]?.card?.card?.info;
            const menuItems = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
            setMenuItems(menuItems);
            setRestaurant(requiredData);
        }
        catch(e){
            console.error(e.message);
            navigate('/');
        }

    }

    //return restaurants details & menuItems
    return [restaurant,menuItems];      
};

export default useRestaurant;