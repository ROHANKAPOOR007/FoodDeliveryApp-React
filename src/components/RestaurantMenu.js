import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

function RestaurantMenu() {
    
    const {resId} = useParams();
    // console.log(resId);

    // const resMenuInfo = useRestaurantMenu(resId); it is a custom hook
    const resMenuInfo = useRestaurantMenu(resId);

    if(resMenuInfo===null) return <Shimmer/>


    const {name, cuisines, costForTwoMessage } = resMenuInfo?.data?.cards[2]?.card?.card?.info;

    const{itemCards} = resMenuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(itemCards)


  return (
    <div className="menu">
        <h1>{name}</h1>
        <p>
            {cuisines.join(", ")} - {costForTwoMessage}
        </p>

        <ul>
            {itemCards.map((item) => (
                <li key={item.card.info.id} > {/* Using <li> for list items */}
                    {item.card.info.name} - {"Rs."} {item.card.info.price/100 || item.card.info.defaultPrice/100}
                </li>
            ))}

        </ul>
    </div>
  )
}

// resMenuInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.name

export default RestaurantMenu;