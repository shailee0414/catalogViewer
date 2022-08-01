import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';

export default class Carousel extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div style={{margin:'30px'}}>
        <h2>Swipe To Slide</h2>
        <Slider {...settings}>
          <div >
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

// import React from "react";
// import Slider from "infinite-react-carousel";
// // import "./styles.css";

// const Carousel = ({data}) => {
//   // const handleDelete = () => {
//   //   alert("Call delete");
//   // };

//   // const handleView = () => {
//   //   alert("Call view");
//   // };

//   return (
//     <Slider
//       nextArrow={<button type="button">{"->"}</button>}
//       prevArrow={<button type="button">{"<-"}</button>}
//       slidesToShow={4}
//       dots
//     >
//       {false
//         ? []
//         : data.from(new data(5)).map((_, i) => (
//           <div className="container_image">
//             <div
//               className="image_item"
//               key={data.id}
//               style={{
//                 height: 200
//               }}
//             >
//               <img src={data.image} alt="" />
//             </div>
//           </div>
//         ))}
//     </Slider>
//   );
// };

// export default Carousel;