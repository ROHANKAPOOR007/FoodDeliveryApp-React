import RestCard from "./RestCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7010542&lng=77.4305723&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const jsonData = await data.json();
        // console.log(jsonData);

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
        // console.log(searchText);
        const searchedRestaurant = listOfRestaurants.filter((restaurants)=>{
            return restaurants.info.name.toLowerCase().includes(searchText.toLowerCase()) 
        });

        setFilteredRestaurant(searchedRestaurant);
    }


    // this will check if the Internet is available or not
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) {
        return <h1>Looks like you're Offline!! Please Check your Internet Connection.</h1>
    }

    // This is conditional Rendering.
    // if listOfRestaurants.length===0 then show Shimmer otherwise show Rest
    return listOfRestaurants.length===0 ? <Shimmer/> : (
        <div className="body">

            <div className="filter flex">

                <div className="search p-4 m-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
                    <button className="px-4 py-2 m-4 bg-blue-100 rounded-lg" onClick={searchRestaurants} > Search </button>
                </div>

                <div className="p-4 m-4 flex item-center">
                    <button 
                        className="px-4 py-2 m-4 bg-blue-100 rounded-lg" 
                        onClick={filterRestaurants}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
               

            </div>

            <div className="flex flex-wrap">
                {   //not using index as keys. it is less recommanded <<<<<<<unique.id
                    filteredRestaurant.map((restaurant)=>{
                        const key = restaurant.info.id; // This is your 'key' value
                        // console.log('Key:', key); // Log the key to the console
                        return <Link 
                            key={restaurant.info.id} 
                            to={"/restaurants/"+restaurant.info.id} >
                            <RestCard resData = {restaurant} /> 
        
                        </Link>
                    })
                }
                
            </div>

        </div>
    )
}

export default Body;