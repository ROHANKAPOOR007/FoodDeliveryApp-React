import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

function RestaurantMenu() {
    
    const [showIndex, setShowIndex] = useState(null)

    const {resId} = useParams();
    // console.log(resId);

    // const resMenuInfo = useRestaurantMenu(resId); it is a custom hook
    const resMenuInfo = useRestaurantMenu(resId);

    if(resMenuInfo===null) return <Shimmer/>


    const {name, cuisines, costForTwoMessage } = resMenuInfo?.data?.cards[2]?.card?.card?.info;

    const{itemCards} = resMenuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(itemCards)
    // console.log(resMenuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const Categories = resMenuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=> c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        
    // console.log(Categories)

  return (
    <div className="text-center">
        <h1 className="font-bold my-7 text-2xl">{name}</h1>
        <p className=" font-bold text-lg">
            {cuisines.join(", ")} - {costForTwoMessage}
        </p>

    {/* Categories Accordian */}
        {Categories.map((category, index)=>{
            return <RestaurantCategory 
                    data = {category?.card?.card} 
                    key={category?.card?.card?.title}
                    showItems = {index === showIndex && true}
                    setShowIndex = {()=> setShowIndex(index)} 
                />
        })}
        
    </div>
  )
}

// {/* <ul>
//             {itemCards.map((item) => (
//                 <li key={item.card.info.id} > {/* Using <li> for list items */}
//                     {item.card.info.name} - {"Rs."} {item.card.info.price/100 || item.card.info.defaultPrice/100}
//                 </li>
//             ))}

//         </ul> */}

// resMenuInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.name

export default RestaurantMenu;