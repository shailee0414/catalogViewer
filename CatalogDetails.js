import React from "react";
// import Carousel from 'react-material-ui-carousel'
const CatalogDetails = ({ item }) => {
    return (
        <div>
            <h2>{item.title}</h2>
            <img src={item.image} />
            

            <p>{item.content}</p>
        </div>
    )
}
export default CatalogDetails;