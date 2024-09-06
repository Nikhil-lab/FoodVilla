import React from "react";
import ReactDOM from "react-dom/client";

// JSX to React.createElement=> object => html(DOM)

const Title = () => (
    <a href= '/'>
        <img 
            alt ="logo"
            className="logo"
            src ="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
        />
    </a>


);

const HeaderComponent = () =>{
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
        
    );
};

//config driven UI
const restaurantList =[
{
    name: "Burger King",
    image: "https://cdn.prod.website-files.com/631b4b4e277091ef01450237/65947cd2a2c28c35b5ca6fb1_Whopper%20w%20Cheese.png",
    cuisines:["American","Burger"],
    rating:"4.2",
    id:1,
},
{
    name: "MTR",
    image: "https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4",
    cuisines:["American","Burger"],
    rating:"4.2",
    id:2,
},
{
    name: "Anjappar",
    image: "https://cdn.prod.website-files.com/631b4b4e277091ef01450237/65947cd2a2c28c35b5ca6fb1_Whopper%20w%20Cheese.png",
    cuisines:["American","Burger"],
    rating:"4.2",
    id:3,
},
{
    name: "Dough Zone",
    image: "https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4",
    cuisines:["American","Burger"],
    rating:"4.2",
    id:4,
},
{
    name: "Burger King",
    image: "https://cdn.prod.website-files.com/631b4b4e277091ef01450237/65947cd2a2c28c35b5ca6fb1_Whopper%20w%20Cheese.png",
    cuisines:["American","Burger"],
    rating:"4.2",
    id:5,
},
{
    name: "Burger King",
    image: "https://cdn.prod.website-files.com/631b4b4e277091ef01450237/65947cd2a2c28c35b5ca6fb1_Whopper%20w%20Cheese.png",
    cuisines:["American","Burger"],
    rating:"4.2",
    id:6,
},
{
    name: "Burger King",
    image: "https://cdn.prod.website-files.com/631b4b4e277091ef01450237/65947cd2a2c28c35b5ca6fb1_Whopper%20w%20Cheese.png",
    cuisines:["American","Burger"],
    rating:"4.2",
    id:7,
},
{
    name: "Burger King",
    image: "https://cdn.prod.website-files.com/631b4b4e277091ef01450237/65947cd2a2c28c35b5ca6fb1_Whopper%20w%20Cheese.png",
    cuisines:["American","Burger"],
    rating:"4.2",
    id:8,
},
{
    name: "Burger King",
    image: "https://cdn.prod.website-files.com/631b4b4e277091ef01450237/65947cd2a2c28c35b5ca6fb1_Whopper%20w%20Cheese.png",
    cuisines:["American","Burger"],
    rating:"4.2",
    id:9,
},
{
    name: "Burger King",
    image: "https://cdn.prod.website-files.com/631b4b4e277091ef01450237/65947cd2a2c28c35b5ca6fb1_Whopper%20w%20Cheese.png",
    cuisines:["American","Burger"],
    rating:"4.2",
    id:10,
},
]

//PROPS
// const RestaurantCard = (props) =>{

//     const {restaurant} = props;
//     const {name,image,cuisines,ratings} = restaurant;

//     console.log(props);
//     console.log(`Name :${name}`);
    
//     return (
//         <div className="card">
//             <img 
//                 alt ="logo"
//                 src ={props.restaurant.image}
//             />
//             <h1 id="name"> {props.restaurant.name} </h1>
//             <h2 id="desc"> {props.restaurant.cuisines.join(',')} </h2>
//             <div id="rating"> {props.restaurant.rating} </div>
//         </div>
//     );
// };


//passing data inside a component
//pass in arguments & receive parameters
/*const Body = () =>{
    return (
        <div>
            //<h1 style={styleObj}> body </h1> 
            <div className="restaurant-list">
                <RestaurantCard restaurant = {restaurantList[0]}/>
                <RestaurantCard restaurant = {restaurantList[1]} />
                <RestaurantCard restaurant = {restaurantList[2]}/>
                <RestaurantCard restaurant = {restaurantList[3]}/>
                <RestaurantCard restaurant = {restaurantList[4]} />
                <RestaurantCard restaurant = {restaurantList[5]}/>
                <RestaurantCard restaurant = {restaurantList[0]}/>
                <RestaurantCard restaurant = {restaurantList[1]} />
                <RestaurantCard restaurant = {restaurantList[2]}/>
                <RestaurantCard restaurant = {restaurantList[3]}/>
                <RestaurantCard restaurant = {restaurantList[4]} />
                <RestaurantCard restaurant = {restaurantList[5]}/>
            </div>
            
        </div>
    );

};*/


const RestaurantCard = ({name,image,cuisines,rating}) =>{

    return (
        <div className="card">
            <img 
                alt ="logo"
                src ={image}
            />
            <h1 id="name"> {name} </h1>
            <h2 id="desc"> {cuisines.join(',')} </h2>
            <div id="rating"> {rating} </div>
        </div>
    );
};

const Body = () =>{
    return (
        <div className="restaurant-list">
            {
                restaurantList.map((restaurant)=>{
                    return <RestaurantCard {...restaurant} key={restaurant.id}/>
                })
            }
        </div>
    );

};

//styling using classNames
const Footer = () =>{
    return <h1 className="footer"> Footer </h1>

}

//JSX can only have one parent (very important)
//React.Fragment --> Component exported by React (like an empty tag)
//<React.Fragment> </React.Fragment>
//or use empty tag <> </> 

const AppLayout = () =>{
    return (
        <React.Fragment>
            <HeaderComponent/>
            <Body />
            <Footer />
        </React.Fragment>

    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);


//Virtual DOM
//keep a representation of DOM

/*
      root
      / \ 
    div  para
    / \
res1   res2

we need it for 
Reconciliation in REACT
- Diff algo that react used to find the difference between one tree from other 
- Defination: The Algo React uses to diff one tree with another to deterine which parts needs to be changed.
- to determine what needs to be updated.
- which helps in rerendering that small component which has changed.


div1 div2 div3 div4 --> all are similar div
whenever we have multiple children with same attributes,

now new div5 got introduced in first position:
div5 div1 div2 div3 div4 --> now react will rerender all the divs

but if key is used, React will only rerendered what has changed.


Why React is Fast?
--> above ans


Assignment:
React Fiber --> new reconciliation engine (React 16)

Why not to use index as a key?


*/

