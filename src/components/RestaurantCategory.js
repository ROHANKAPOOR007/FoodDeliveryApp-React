import { useState } from "react";
import ItemList from "./ItemList";

// RestaurantCategory component to display a restaurant category with items
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    const handleClick = () =>{
        setShowIndex()
    }

    return (
        <div>
            {/* Header section */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                {/* Category title and toggle button */}
                <div className="flex justify-between">
                    <span 
                        className="text-lg font-bold cursor-pointer"
                        onClick={handleClick} 
                    >
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>{" ⬇️ "}</span>
                </div>

                {/* Conditionally render the ItemList based on showItems state */}
                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    )
};

export default RestaurantCategory;
