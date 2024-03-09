// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import ExpandMenu from "./ExpandMenu";
// import Logo from './logo3.png';
// import { FaHome, FaListAlt, FaShoppingBasket } from "react-icons/fa";
// import { FaBoxOpen, FaTags, FaUser } from "react-icons/fa6";

// const Drawer = ({ isOpen, toggleDrawer, routes }) => {
//   return (
//     <>
//       {isOpen && <Backdrop onClick={toggleDrawer} />}
//       <SDrawer isOpen={isOpen}>
//         <RightNav>
//           <SNavbarBrand><LogoImage src={Logo} alt="" /></SNavbarBrand>
//           <NavRoutes>
//             {routes.map((route) => {
//               if (route.subRoutes) {
//                 return <ExpandMenu route={route} key={route.name} />;
//               }
//               return (
//                 <NavRoute
//                   onClick={toggleDrawer}
//                   to={route.link}
//                   key={route.name}
//                 >
//                   {route.name}
//                 </NavRoute>
//               );
//             })}
//           </NavRoutes>
//           {/* <LoginButton>Login</LoginButton> */}
//         </RightNav>
//       </SDrawer>
//     </>
//   );
// };



// const getIcon = (routeName) => {
//     switch (routeName) {
//       case "Home":
//         return <FaHome />;
//       case "Shop by Category":
//         return <FaListAlt />;
//       case "Latest Collections":
//         return <FaBoxOpen />;
//       case "New Arrivals":
//         return <FaTags />;
//       case "Offers":
//         return <FaTags />;
//       case "Bestsellers":
//         return <FaShoppingBasket />;
//       default:
//         return <FaUser />;
//     }
//   };
  



// export default Drawer;

// const LogoImage = styled.img`
//   width: 100px; 
//   height: auto; 
//   padding:1rem 1rem;
// `;



// const SNavbarBrand = styled.h2`
//   font-size: 3rem;
// `;
// const Backdrop = styled.div`
//   height: 100%;
//   width: 100%;
//   z-index: 100;
//   position: absolute;
//   top: 0;
//   left: 0;
//   transition: 0.3s ease;

//   background-color: rgba(0, 0, 0, 0.2);
// `;
// const SDrawer = styled.div`
//   z-index: 150;
//   position: absolute;
//   top: 0;
//   height: 100vh;
//   width: 47%;
//   background-color: white;
//   transition: 0.3s ease;

//   transform: translateX(${(props) => (props.isOpen ? "0" : "-110%")});
// `;

// const RightNav = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
//   padding: 1rem;
// `;
// const NavRoutes = styled.div``;
// const NavRoute = styled(Link)`
//   display: flex;
//   text-decoration: none;
//   color: black;
//   font-size: 2.5rem;
//   padding: 0.5rem;
// `;







// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import { FaHome, FaShoppingBasket, FaListAlt, FaTags, FaBoxOpen, FaUser } from "react-icons/fa"; // Import appropriate icons
// import ExpandMenu from "./ExpandMenu";
// import Logo from './logo3.png';

// const Drawer = ({ isOpen, toggleDrawer, routes }) => {
//   return (
//     <>
//       {isOpen && <Backdrop onClick={toggleDrawer} />}
//       <SDrawer isOpen={isOpen}>
//         <RightNav>
//           <SNavbarBrand><LogoImage src={Logo} alt="" /></SNavbarBrand>
//           <NavRoutes>
//             {routes.map((route, index) => (
//               <React.Fragment key={route.name}>
//                 {route.subRoutes ? (
//                   <ExpandMenu route={route} />
//                 ) : (
//                   <React.Fragment>
//                     <NavRouteWrapper>
//                       <NavIcon>{getIcon(route.name)}</NavIcon>
//                       <NavRoute
//                         onClick={toggleDrawer}
//                         to={route.link}
//                       >
//                         {route.name}
//                       </NavRoute>
//                     </NavRouteWrapper>
//                   </React.Fragment>
//                 )}
//                 {index !== routes.length - 1 && <hr />}
//               </React.Fragment>
//             ))}
//           </NavRoutes>
//           {/* <LoginButton>Login</LoginButton> */}
//         </RightNav>
//       </SDrawer>
//     </>
//   );
// };

// // Function to return appropriate icon based on route name
// const getIcon = (routeName) => {
//   switch (routeName) {
//     case "Home":
//       return <FaHome />;
//     case "Shop by Category":
//       return <FaListAlt />;
//     case "Latest Collections":
//       return <FaBoxOpen />;
//     case "New Arrivals":
//     case "Offers":
//       return <FaTags />;
//     case "Bestsellers":
//       return <FaShoppingBasket />;
//     default:
//       return <FaUser />;
//   }
// };

// export default Drawer;

// const LogoImage = styled.img`
//   width: 100px; 
//   height: auto; 
//   padding:1rem 1rem;
// `;

// const SNavbarBrand = styled.h2`
//   font-size: 3rem;
// `;
// const Backdrop = styled.div`
//   height: 100%;
//   width: 100%;
//   z-index: 100;
//   position: absolute;
//   top: 0;
//   left: 0;
//   transition: 0.3s ease;

//   background-color: rgba(0, 0, 0, 0.2);
// `;
// const SDrawer = styled.div`
//   z-index: 150;
//   position: absolute;
//   top: 0;
//   height: 100vh;
//   width: 47%;
//   background-color: white;
//   transition: 0.3s ease;

//   transform: translateX(${(props) => (props.isOpen ? "0" : "-110%")});
// `;

// const RightNav = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
//   padding: 1rem;
// `;
// const NavRoutes = styled.div``;
// const NavRouteWrapper = styled.div`
//   display: flex;
//   align-items: center;
// `;
// const NavIcon = styled.div`
//   margin-right: 1rem;
//   font-size: 2.5rem;
// `;
// const NavRoute = styled(Link)`
//   display: flex;
//   text-decoration: none;
//   color: black;
//   font-size: 2.5rem;
//   padding: 0.5rem;
// `;





// perfect working

// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import { FaHome, FaShoppingBasket, FaTags, FaBoxOpen, FaUser,FaList } from "react-icons/fa"; // Import appropriate icons
// import ExpandMenu from "./ExpandMenu";
// import Logo from './logo3.png';


// const Drawer = ({ isOpen, toggleDrawer, routes }) => {
//   return (
//     <>
//       {isOpen && <Backdrop onClick={toggleDrawer} />}
//       <SDrawer isOpen={isOpen}>
//         <RightNav>
//           <SNavbarBrand><LogoImage src={Logo} alt="" /></SNavbarBrand>
//           <NavRoutes>
//             {routes.map((route, index) => (
//               <React.Fragment key={route.name}>
//                 {route.subRoutes ? (
//                   <ExpandMenu route={route} />
//                 ) : (
//                   <React.Fragment>
//                     <NavRouteWrapper>
//                       <NavIcon>{getIcon(route.name)}</NavIcon>
//                       <NavRoute
//                         onClick={toggleDrawer}
//                         to={route.link}
//                       >
//                         {route.name}
//                       </NavRoute>
//                     </NavRouteWrapper>
//                   </React.Fragment>
//                 )}
//                 {index !== routes.length - 1 && <hr />}
//               </React.Fragment>
//             ))}
//           </NavRoutes>
//           {/* <LoginButton>Login</LoginButton> */}
//         </RightNav>
//       </SDrawer>
//     </>
//   );
// };

// // Function to return appropriate icon based on route name
// const getIcon = (routeName) => {
//   switch (routeName) {
//     case "Home":
//       return <FaHome />;
//     case "Shop by Category":
//       return <FaList />; // Use FaListAlt for Shop by Category
//     case "Latest Collections":
//       return <FaBoxOpen />;
//     case "New Arrivals":
//     case "Offers":
//       return <FaTags />;
//     case "Bestsellers":
//       return <FaShoppingBasket />;
//     default:
//       return <FaUser />;
//   }
// };

// export default Drawer;

// const LogoImage = styled.img`
//   width: 100px; 
//   height: auto; 
//   padding:1rem 1rem;
// `;

// const SNavbarBrand = styled.h2`
//   font-size: 3rem;
// `;
// const Backdrop = styled.div`
//   height: 100%;
//   width: 100%;
//   z-index: 100;
//   position: absolute;
//   top: 0;
//   left: 0;
//   transition: 0.3s ease;

//   background-color: rgba(0, 0, 0, 0.2);
// `;
// const SDrawer = styled.div`
//   z-index: 150;
//   position: absolute;
//   top: 0;
//   height: 100vh;
//   width: 57%;
//   background-color: white;
//   transition: 0.3s ease;

//   transform: translateX(${(props) => (props.isOpen ? "0" : "-110%")});
// `;

// const RightNav = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
//   padding: 1rem;
// `;
// const NavRoutes = styled.div``;
// const NavRouteWrapper = styled.div`
//   display: flex;
//   align-items: center;
// `;
// const NavIcon = styled.div`
//   margin-right: 1rem;
//   font-size: 2.5rem;
// `;
// const NavRoute = styled(Link)`
//   display: flex;
//   text-decoration: none;
//   color: black;
//   font-size: 2.5rem;
//   padding: 0.5rem;
// `;






import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingBasket, FaListAlt, FaTags, FaBoxOpen, FaUser } from "react-icons/fa"; // Import appropriate icons
import ExpandMenu from "./ExpandMenu";
import Logo from './logo3.png';

const Drawer = ({ isOpen, toggleDrawer, routes }) => {
  return (
    <>
      {isOpen && <Backdrop onClick={toggleDrawer} />}
      <SDrawer isOpen={isOpen}>
        <RightNav>
          <SNavbarBrand><LogoImage src={Logo} alt="" /></SNavbarBrand>
          <NavRoutes>
            {routes.map((route, index) => (
              <React.Fragment key={route.name}>
                {route.subRoutes ? (
                  <ExpandMenu route={route} />
                ) : (
                  <React.Fragment>
                    <NavRouteWrapper>
                      <NavIcon>{getIcon(route.name)}</NavIcon>
                      <NavRoute
                        onClick={toggleDrawer}
                        to={route.link}
                      >
                        {route.name}
                      </NavRoute>
                    </NavRouteWrapper>
                  </React.Fragment>
                )}
                {index !== routes.length - 1 && <hr />}
              </React.Fragment>
            ))}
          </NavRoutes>
          {/* <LoginButton>Login</LoginButton> */}
        </RightNav>
      </SDrawer>
    </>
  );
};

// Function to return appropriate icon based on route name
const getIcon = (routeName) => {
  switch (routeName) {
    case "Home":
      return <FaHome />;
    case "Shop by Category":
      return <FaListAlt />;
    case "Latest Collections":
      return <FaBoxOpen />;
    case "New Arrivals":
    case "Offers":
      return <FaTags />;
    case "Bestsellers":
      return <FaShoppingBasket />;
    default:
      return <FaUser />;
  }
};

export default Drawer;

const LogoImage = styled.img`
  width: 100px; 
  height: auto; 
  padding:1rem 1rem;
`;

const SNavbarBrand = styled.h2`
  font-size: 3rem;
`;
const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s ease;

  background-color: rgba(0, 0, 0, 0.2);
`;
const SDrawer = styled.div`
  z-index: 150;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 60%;
  background-color: white;
  transition: 0.3s ease;

  transform: translateX(${(props) => (props.isOpen ? "0" : "-110%")});
`;

const RightNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem;
`;
const NavRoutes = styled.div``;
const NavRouteWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const NavIcon = styled.div`
  margin-right: 1rem;
  font-size: 2.5rem;
  display: flex; /* Ensure icon is displayed as flex */
  align-items: center; /* Center icon vertically */
`;
const NavRoute = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 2.5rem;
  padding: 1.5rem;
`;
