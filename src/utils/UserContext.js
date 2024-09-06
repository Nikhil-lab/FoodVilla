import { createContext } from "react";

const UserContext = createContext({user:{
    name:"Dummy name",
    email:"dummy@gmail.com"
}})

UserContext.displayName = "UserContext"; //name to debug in react devtools

export default UserContext;