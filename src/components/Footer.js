//styling using classNames

import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () =>{
    const {user} = useContext(UserContext);

    return (
        <div className="flex justify-center align-middle bg-gray-200">
                <h1 className="footer"> Site is developed by {user.name}🐾 </h1>
        </div>
    )

}

export default Footer;