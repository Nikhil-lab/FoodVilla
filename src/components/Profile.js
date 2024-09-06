
import { useEffect, useState } from "react";

const Profile = (props) =>{
    const [name,setName] = useState();
    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log("useEffect Called after render");
        const timer = setInterval(()=>{
            console.log("Timer called iside useEffect");
        },1000)

        return () => {                      // CLEANUP Function => similar to (onDestroy of a angular component or Component will unmount
            clearInterval(timer);
        }

    },[]);

    console.log("render");
    return(
        <>
            <h1> Profile Page</h1>
            <h2> Props: {props.name} </h2>
            

            <button onClick={()=>setCount(count+1)}>
                Increment
            </button>
            <h2>Counter: {count}</h2>
        </>

    )
}

export default Profile;