import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

    const dispatch = useDispatch()

    const handleAddItem = (item)=>{
        //dispatch an Action
        dispatch(addItem(item));

       };

    
    return (
        <div>
            {items.map((item) => {
                const { id, name, price, description, defaultPrice, imageId } = item.card.info;
                return (
                    <div key={id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                        <div className="w-9/12">
                            <div>
                                <span>{name} {"- ₹ "} {price ? price / 100 : defaultPrice / 100} </span>
                            </div>
                            <p className="text-xs">{description}</p>
                        </div>
                        <div className="w-3/12 p-2 relative">
                            <img src={CDN_URL + imageId} alt="" className="w-full" />
                            <button 
                                className="
                                p-2
                             bg-white
                              text-black
                               shadow-lg 
                               absolute 
                               bottom-2 
                               left-1/2 
                               transform -translate-x-1/2 
                               rounded-lg"
                               
                            //    Use onClick={() => handleAddItem(item)} to pass arguments.
                            //     Avoid onClick={handleAddItem(item)} because it calls the function immediately.
                            //     Use onClick={handleAddItem} if no arguments are needed.
                            // onClick={handleAddItem}
                            // onClick={handleAddItem(item)}

                            onClick={()=>handleAddItem(item)}
                               
                            >
                                Add +
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;
