import {useState} from "react";

const useMultiple = () =>{
    const [Multiple,setMultiple] = useState(false);

    const setIsMultiple = (param)=>{
        setMultiple(param);
    }
    return [Multiple,setIsMultiple]

}

const Section = ({title,description})=>{
    const [isMultiple,setIsMultiple] = useMultiple();
    const [isVisible,setIsVisible] = useState(false);

    return(
        <div className="border border-black p-2 m-2">
            <h3 className="bold text-xl">{title}</h3>
            {isVisible && <p>{description}</p>}
            <button className="bg-purple-950 text-white p-2 m-2 hover:bg-green-700 rounded-lg" onClick={()=>{
                (isVisible)? setIsVisible(false):setIsVisible(true)
            }}>{isVisible?"Hide":"Show"}</button>
            {isMultiple?<h1>Multiple</h1>:<h1>Not Multiple</h1>}
        </div>

    )
}

const Instamart = ()=>{

    const [sectionConfig,setSectionConfig] = useState({
        showAbout: true,
        showDetails: false,
        showTeam: false,
        showProduct: false,
        showCareers: false,
    })

    const [isMultiple,setIsMultiple] = useMultiple();

    return (
        <div>
            <div className="flex justify-between">
                <h1 className="text-3xl p-2 m-2 font-bold" > Instamart </h1>
                <div className="p-2 m-2 font-bold">
                    <input className="mr-2" type="checkbox" checked={isMultiple} onChange={()=>{
                        isMultiple?setIsMultiple(false):setIsMultiple(true)
                    }} />
                    <label>Multiple</label>
                </div>


            </div>

            <Section title={"About InstaMart"} 
            description={
                "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,Lorem ipsum dolor sit amet., comes from a line in section 1.10.32"
            }/> 
            <Section title={"Details of InstaMart"}
            description={
                "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,Lorem ipsum dolor sit amet., comes from a line in section 1.10.32"
            }/> 
            <Section title={"Team InstaMart"} 
            description={
                "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,Lorem ipsum dolor sit amet., comes from a line in section 1.10.32"
            }/> 
            <Section title={"Product"} 
            description={
                "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,Lorem ipsum dolor sit amet., comes from a line in section 1.10.32"
            }/> 
            <Section title={"Careers"} 
            description={
                "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,Lorem ipsum dolor sit amet., comes from a line in section 1.10.32"
            }/> 
        </div>
    )
}

export default Instamart;



//Lifting the state up
