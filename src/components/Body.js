import RestCard from "./RestCard";
import resList from "../utils/ResList";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = ()=>{

    // Local State variable  = Super Powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    // Whenever state variable update, react triggers a reconciliation cycle(re-render the component)

    
    useEffect(()=>{
        fetchData();
    }, []);


    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.70398149999999&lng=77.4329048&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const jsonData = await data.json();
        console.log(jsonData);

        setListOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setFilteredRestaurant(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    

    // filter logic here
    function filterRestaurants(){ 
        const filteredRestaurantsList = listOfRestaurants.filter((res)=>{
            return res.info.avgRating >= 4.5
        });
        setListOfRestaurants(filteredRestaurantsList)
    }

    
    // Search for the restaurants and update the UI
    function searchRestaurants(){
        // console.log("Searching...")
        console.log(searchText);
        const searchedRestaurant = listOfRestaurants.filter((restaurants)=>{
            return restaurants.info.name.toLowerCase().includes(searchText.toLowerCase()) 
        });

        setFilteredRestaurant(searchedRestaurant);
    }

    // This is conditional Rendering.
    // if listOfRestaurants.length===0 then show Shimmer otherwise show Rest
    return listOfRestaurants.length===0 ? <Shimmer/> : (
        <div className="body">

            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
                    <button onClick={searchRestaurants} > Search </button>
                </div>
                <button 
                    className="filterButton" 
                    onClick={filterRestaurants}
                >
                    Top Rated Restaurants
                </button>
            </div>

            <div className="rest-container">
                {   //not using index as keys. it is less recommanded <<<<<<<unique.id
                    filteredRestaurant.map((restaurant)=>{
                        return <RestCard resData = {restaurant} key={restaurant.info.id}/>
                    })
                }
                
            </div>

        </div>
    )
}

export default Body;