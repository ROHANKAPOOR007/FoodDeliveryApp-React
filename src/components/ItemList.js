import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
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
                            <button className="p-2 bg-white text-black shadow-lg absolute bottom-2 left-1/2 transform -translate-x-1/2 rounded-lg">
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
