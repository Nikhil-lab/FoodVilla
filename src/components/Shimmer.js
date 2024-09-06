const Shimmer = () =>{
    return (
        <div data-testid="shimmer" className="restaurant-list flex flex-wrap">
           {
            Array(10).fill("").map((e,index)=>{
                return <div key={index} className="shimmer-card w-56 p-2 m-2 shadow-lg"> </div>
            })
           } 
        </div>
    )
};

export default Shimmer;