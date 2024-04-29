import { CDN_URL } from "../utils/constants";
const RestCard = (props)=>{
    // const {restName, cuisine, stars, ETA} = props;
    const {resData} = props;
    const {name, cuisines, avgRating, sla, costForTwo} = resData?.info
    return(
        <div className="rest-card">
            <img className="resLogo" src={CDN_URL + resData.info.cloudinaryImageId} alt="" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} Minutes</h4>

        </div>
    )
}


export default RestCard;