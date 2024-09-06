import { useState, useEffect, useContext } from "react";
import { restaurantList, SWIGGY_API } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

/*
- What is State?
built in React object that contains Data/information
- What is React Hooks?
--> Just a normal JS functions but has a specific function for it.
- What is useState? --> to create local State variables.
returns = [variable name,funcion to update the varible]
- How to use it?
--> this function returns an Array and the first element of the Array is the Varibale Name.

Why do we need a state variable?
React has no idea about normal varibles and wont keep track of it. So wont rerender.
Everytime we want our variables to be in sync with the UI. So we use State Variables.
React keeps a track of all the state variables.

*/

/*

2 ways to load the page

a. Loads => API => Render Page
            (300ms)  (500ms)

b. loads => render => API => Update UI
            (100ms) faster

useEffect()
- normal functions from React library (named import)
- whenever our component rerenders,callback func is called.
- components re-renders when state changes & when props changes.
- Dependency array -> used to stops unnecessary rerenders 


useState()
- is a hook which react gives, to create local state variables inside a functinal components

Execution Steps:
1. First Render
2. then useEffect() is executed. Makes API call.
3. again re-rendered with data

Note:
never create states outside functional component.
never use usestate inside a loop or if stmts.
never create a component inside a component(bcz comnponent will be created on every rerender)

*/

const Body = (prop) =>{
    //normal variable in Javascript
    let searchTxt = "KFC";

    //searchText is a local state variable in REACT
    const [searchText,setSearchText] = useState(""); // to create State variables.

    const [searchClick,setSearchClick] = useState("false");

    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [allRestaurants,setAllRestaurants] = useState([]);

    const {user,setUser} = useContext(UserContext);

    //custom hook to check if user is online or not

    console.log("just logging inside component--> RENDER");
    useEffect(()=>{
        console.log("useEffect() called");
    });

    //called only once after render
    useEffect(()=>{
        console.log("Called useEffect once --> empty dependency array");
    },[]);

    //called once after initial render + everytime search text changes
    useEffect(()=>{
        console.log("called useEffect, when SEARCH text changes");
    },[searchText]);

    //called when restaurants changes
    useEffect(()=>{
        console.log("called useEffect, when RESTAURANTS changes");
    },[filteredRestaurants]);

    //fetch data from API
    useEffect(()=>{
        getRestaurants();
    },[]);

    async function getRestaurants(){
        try{
            const data = await fetch(SWIGGY_API);
            const jsonData = await data.json();


            let fullData = jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
            let restaurants = fullData.map(restaurant=>{
                return {name:restaurant.info.name,
                    cuisines:restaurant.info.cuisines,
                    cloudinaryImageId:restaurant.info.cloudinaryImageId,
                    avgRating:restaurant.info.avgRating,
                    id:restaurant.info.id,
                }
            })

            setAllRestaurants(restaurants);

            setFilteredRestaurants(restaurants);
            // setAllRestaurants(jsonData?.cards[1].card?.gridElements?.infoWithStyle?.restaurants)

        }
        catch(e){
            console.error(e.message);
        } 
    }
    

    //Early return (do not render the component)
    // if(!allRestaurants) return null;


    //Conditional Rendering
    return (allRestaurants.length === 0) ? <Shimmer/> : (
        <>
            <div className="search-container p-5 bg-pink-50 m-2">
                <input 
                data-testid ="search-input"
                type="text" 
                placeholder="Search"
                className="search-input hover:bg-green-50 p-2 m-2"
                value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value);
                }}
                />

                <button data-testid ="search-btn"
                className="search-btn p-2 m-5 bg-purple-950 hover:bg-gray-700 text-white rounded-md"
                onClick={()=>{
                    setSearchClick("true")
                    setFilteredRestaurants(
                        searchText.trim() !== ""
                          ? filterData(filteredRestaurants, searchText.trim())
                          : allRestaurants
                      );   
                }}>
                    Search
                </button>

                {/* To change the User Context 
                <input 
                type="text" 
                placeholder={user.name}
                className="search-input hover:bg-green-50 p-2 m-2 text-black"
                value={user.name}
                onChange={(e)=>{
                    setUser({name:e.target.value});
                }}
                /> */}

                {/* <h1>{searchText}</h1>
                <h1>{searchClick}</h1> */}
            </div>

            <div data-testid="res-list" className="restaurant-list flex flex-wrap">
                {   
                    (filteredRestaurants.length === 0) ? <h1> No matching results</h1> :
                
                    filteredRestaurants.map((restaurant)=>{
                        return (
                        <Link to={"/restaurant/"+restaurant.id} key={restaurant.id}>
                                <RestaurantCard {...restaurant} user={prop.user}/>
                        </Link>
                        )
                    })
                }
            </div>
        </>

    );

};
export default Body;

/*
Note:

Why do we need Hook()?

Functions is used for 
- re-usability
- readability 
- testable
- modularity (Every component has its own functionality)
- maintainable (easy to debug)




Common place to keep utility function?
- Make a folder like Utils.



*/
