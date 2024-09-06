export const filterData= (restaurants,searchText)=> {
    const filteredData = restaurants.filter(restaurant=>{
        return restaurant?.name?.toLowerCase().includes(searchText?.toLowerCase());
    })
    return filteredData;
}