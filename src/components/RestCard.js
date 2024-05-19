import { CDN_URL } from "../utils/constants";
const RestCard = (props)=>{
    // const {restName, cuisine, stars, ETA} = props;
    const {resData} = props;
    const {name, cuisines, avgRating, sla, costForTwo} = resData?.info

    // style = {{backgroundColor: "#e1dfdf"}}
    return(
        <div className = "m-3 p-3 w-[230px] rounded-lg bg-gray-100 hover:bg-gray-200" >
            <img className="rounded-lg" src={CDN_URL + resData.info.cloudinaryImageId} alt="" />
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} Minutes</h4>

        </div>
    )
}


export default RestCard;