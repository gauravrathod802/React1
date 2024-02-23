// import React, { useEffect, useState } from 'react'
// import SimpleImageSlider from "react-simple-image-slider";

// import img1 from './image1.png';
// import img2 from './image2.png';
// import img3 from './image3.png';
// import img4 from './image4.png';
// import img5 from './image5.png';
// import img6 from './image6.png';
// import img7 from './image7.webp'


// const images = [
//     { url: img1 },
//     { url: img2},
//     { url: img3 },
//     { url: img4 },
//     { url: img5 },
//     { url: img6 },
//     { url: img7 },
//   ];
// const Slider = () => {
    //     const [sliderWidth, setSliderWidth] = useState(window.innerWidth * 0.8);
    //     const [sliderHeight, setSliderHeight] = useState((window.innerWidth * 0.8) * 504 / 1500);
    
    //     useEffect(() => {
        //         const handleResize = () => {
            //             setSliderWidth(window.innerWidth * 0.8);
            //             setSliderHeight((window.innerWidth * 0.8) * 504 / 1500);
            //         };
            
            //         window.addEventListener('resize', handleResize);
            
            //         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);
//   return (
    //     <SimpleImageSlider
    //         width={1530}
    //         height={504}
    //         images={images}
    //         showBullets={true}
    //         showNavs={true}
    //         loop={true}
    //         autoPlay={true}
    //         style={{ maxWidth: '100%', height: 'auto' }}
    //             imageStyle={{ objectFit: 'contain', width: '100%', height: '100%' }}
    //       />
    //   )
    // }
    
    // export default Slider
    
    
    
    
    // working code

    // const Slider = () => {
    //     return (
    //         <SimpleImageSlider
    //             width={'100vw'} // Occupies 100% of the viewport width
    //             height={500} // Fixed height around 500px
    //             images={images}
    //             showBullets={true}
    //             showNavs={true}
    //             loop={true}
    //             autoPlay={true}
    //             style={{ maxHeight: '100vh', overflow: 'hidden' }} // Ensures slider doesn't overflow viewport height
    //             imageStyle={{ objectFit: 'contain', width: '100%', height: '100%' }}
    
    //         />
    //     );
    // };









    // working code
// import SimpleImageSlider from "react-simple-image-slider";

// const images = [
//     { url: "https://www.giva.co/cdn/shop/files/In_Vogue_Hero_Website-min.jpg?v=1708421837&width=1780" },
//     { url: "https://www.giva.co/cdn/shop/files/Bestseller_Hero_website-min_1.jpg?v=1708437975&width=3840%22" },
//     { url: "https://www.giva.co/cdn/shop/files/gold_hero_banner_-web-min.jpg?v=1708421757&width=375%20375w,%20" },
//     { url: "https://www.giva.co/cdn/shop/files/hero_banner_web_2_-min_1.jpg?v=1702014551&width=3840%22" },
// ];

// const Slider = () => {
//         return (
//             <div className="slider-container">
//             <SimpleImageSlider
//                 width="100vw" // Occupies 100% of the viewport width
//                 height={450} // Fixed height around 500px
//                 images={images}
//                 showBullets={true}
//                 showNavs={true}
//                 loop={true}
//                 autoPlay={true}
//                 style={{ maxHeight: '100vh', overflow: 'hidden' }} // Ensures slider doesn't overflow viewport height
//                 imageStyle={{ objectFit: 'contain', width: '100%', height: '100%' }}
//             />
//         </div>
//         );
//     };

// export default Slider;

















import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

const images = [
  { url: "https://www.giva.co/cdn/shop/files/In_Vogue_Hero_Website-min.jpg?v=1708421837&width=1780" },
  { url: "https://www.giva.co/cdn/shop/files/Bestseller_Hero_website-min_1.jpg?v=1708437975&width=3840%22" },
  { url: "https://www.giva.co/cdn/shop/files/gold_hero_banner_-web-min.jpg?v=1708421757&width=375%20375w,%20" },
  { url: "https://www.giva.co/cdn/shop/files/hero_banner_web_2_-min_1.jpg?v=1702014551&width=3840%22" },
];

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt={`Slide ${index}`} style={{ width: '100%' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
