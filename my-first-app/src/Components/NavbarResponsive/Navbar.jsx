// import React, {useState} from "react";
// import './Navbar.css'

// const Navbar = () => {

//     // to change burger classes
//     const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
//     const [menu_class, setMenuClass] = useState("menu hidden")
//     const [isMenuClicked, setIsMenuClicked] = useState(false)

//     // toggle burger menu change
//     const updateMenu = () => {
//         if(!isMenuClicked) {
//             setBurgerClass("burger-bar clicked")
//             setMenuClass("menu visible")
//         }
//         else {
//             setBurgerClass("burger-bar unclicked")
//             setMenuClass("menu hidden")
//         }
//         setIsMenuClicked(!isMenuClicked)
//     }

//     return(
//         <div style={{width: '100%', height: '100vh'}}>
//             <nav>
//                 <div className="burger-menu" onClick={updateMenu}>
//                     <div className={burger_class} ></div>
//                     <div className={burger_class} ></div>
//                     <div className={burger_class} ></div>
//                 </div>
//             </nav>

//             <div className={menu_class}></div>
//         </div>
//     )
// }

// export default Navbar






// import Logo from '../../assets/logo2.png';
// import './Navbar.css';
// import { IoIosSearch } from "react-icons/io";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { FaRegHeart } from "react-icons/fa6";
// import { FaRegUser } from "react-icons/fa6";
// import { FaBars } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";


// const Header = () => {
//     const navigate = useNavigate();

//   const handleAccountClick = () => {
//     navigate("/Jewellery-Website/login"); // Navigate to the account route
//   };

//   const handleWishlistClick = () => {
//     navigate("/Jewellery-Website/wishlist"); // Navigate to the wishlist route
//   };

//   const handleCartClick = () => {
//     navigate("/Jewellery-Website/cart"); // Navigate to the cart route
//   };

//   const handleHomeClick = () => {
//     navigate("/Jewellery-Website/");
//   }





//     return (
//         <>
//             <header>
//                 <nav>
//                     <div className="nav-left">
//                         <i><FaBars /></i>
//                         <a href="#" onClick={handleHomeClick}><img className="logo_img" alt="" /></a>
//                     </div>

//                     <div className="nav-right">
//                         <div className="search-bar">
//                             <input className="search-input" placeholder="Search">
//                             </input>
//                             <i><IoIosSearch /></i>
//                         </div>

//                         <div onClick={handleAccountClick}>
//                             <i><FaRegUser className='icon-right'/></i>
//                             <p>Account</p>
//                         </div>

//                         <div onClick={handleWishlistClick}>
//                             <i><FaRegHeart className='icon-right'/></i>
//                             <p>Wishlist</p>
//                         </div>

//                         <div onClick={handleCartClick}>
//                             <i><MdOutlineShoppingCart className='icon-right'/></i>
//                             <p>Cart</p>
//                         </div>
//                     </div>
//                 </nav>
//             </header>



//             {/* below header */}
//             <div className="below-header-options">
//                 <div className="shop-by-category">
//                     Shop by Category
//                 </div>
//                 <div className="collections">
//                     Latest Collections
//                 </div>
//                 <div className="new-arrivals">
//                     New Arrivals
//                 </div>
//                 <div className="offers-promotions">
//                     Offers & Promotions
//                 </div>
//                 <div className="bestsellers">
//                     Bestsellers
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Header;











import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Sidebar from './Sidebar'; // Import the Sidebar component
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleAccountClick = () => {
        navigate("/Jewellery-Website/login"); // Navigate to the account route
    };

    const handleWishlistClick = () => {
        navigate("/Jewellery-Website/wishlist"); // Navigate to the wishlist route
    };

    const handleCartClick = () => {
        navigate("/Jewellery-Website/cart"); // Navigate to the cart route
    };

    const handleHomeClick = () => {
        navigate("/Jewellery-Website/");
    };

    return (
        <>
            {windowWidth <= 768 && <Sidebar />} {/* Render Sidebar component for screen widths <= 768px */}
            <header>
                <nav>
                    <div className="nav-left">
                        {windowWidth <= 768 && <FaBars onClick={handleHomeClick} />} {/* Render burger icon for screen widths <= 768px */}
                        <a href="#" onClick={handleHomeClick}><img className="logo_img" alt="" /></a>
                    </div>

                    <div className="nav-right">
                        <div className="search-bar">
                            <input className="search-input" placeholder="Search" />
                            <i><IoIosSearch /></i>
                        </div>

                        <div onClick={handleAccountClick}>
                            <i><FaRegUser className='icon-right' /></i>
                            <p>Account</p>
                        </div>

                        <div onClick={handleWishlistClick}>
                            <i><FaRegHeart className='icon-right' /></i>
                            <p>Wishlist</p>
                        </div>

                        <div onClick={handleCartClick}>
                            <i><MdOutlineShoppingCart className='icon-right' /></i>
                            <p>Cart</p>
                        </div>
                    </div>
                </nav>
            </header>

            {/* below header */}
            <div className="below-header-options">
                <div className="shop-by-category">
                    Shop by Category
                </div>
                <div className="collections">
                    Latest Collections
                </div>
                <div className="new-arrivals">
                    New Arrivals
                </div>
                <div className="offers-promotions">
                    Offers & Promotions
                </div>
                <div className="bestsellers">
                    Bestsellers
                </div>
            </div>
        </>
    )
}

export default Header;
