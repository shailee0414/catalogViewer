import React from "react";
import CatalogDetails from'./CatalogDetails';
import Carousel from "./Carousal";


const Catalog=({data})=>{
const items= data?.map(item=>{
    return(
        
        <CatalogDetails item={item} key={item.id}/>
    )
})


    return(
        <div>{items}</div>
    )
}
export default Catalog;