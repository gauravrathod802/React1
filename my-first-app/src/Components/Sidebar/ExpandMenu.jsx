// import React, { useState } from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import { FaAngleDown, FaAngleRight,FaList  } from "react-icons/fa";

// const ExpandMenu = ({ route }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   return (
//     <SMenu>
//       <MenuButton onClick={toggleMenu}>
//       <FaList />
//         {route.name} {isMenuOpen ? <FaAngleDown /> : <FaAngleRight />}
//       </MenuButton>
//       <SubRoutesContainer isOpen={isMenuOpen}>
//         {route.subRoutes.map((subRoute) => (
//           <SubRoute to={subRoute.link} key={subRoute.name}>
//             {subRoute.name}
//           </SubRoute>
//         ))}
//       </SubRoutesContainer>
//     </SMenu>
//   );
// };

// export default ExpandMenu;
// const SubRoutesContainer = styled.div`
//   display: ${(props) => (props.isOpen ? "flex" : "none")};
//   flex-direction: column;
//   padding: 1rem;
// `;
// const SMenu = styled.div``;

// const MenuButton = styled.div`
//   font-size: 2.5rem;
//   padding: 0.5rem 0;
//   display: flex;
//   align-items: center;
//   cursor:pointer;
// `;

// const SubRoute = styled(Link)`
//   text-decoration: none;
//   color: black;
//   padding: 0.5rem;
//   font-size: 2rem;
// `;
















import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleRight, FaList } from "react-icons/fa";

const ExpandMenu = ({ route }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <SMenu>
      <MenuButton onClick={toggleMenu}>
        <MenuIconWrapper>
          <FaList />
          <CategoryName>{route.name}</CategoryName>
        </MenuIconWrapper>
        {isMenuOpen ? <FaAngleDown /> : <FaAngleRight />}
      </MenuButton>
      <SubRoutesContainer isOpen={isMenuOpen}>
        {route.subRoutes.map((subRoute, index) => (
          <React.Fragment key={subRoute.name}>
            <SubRoute to={subRoute.link}>{subRoute.name}</SubRoute>
            {index !== route.subRoutes.length-1 && <hr />} {/* Add hr except for the last subroute */}
          </React.Fragment>
        ))}
      </SubRoutesContainer>
    </SMenu>
  );
};

export default ExpandMenu;

const SubRoutesContainer = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  padding: 1.4rem;
`;

const SMenu = styled.div``;

const MenuButton = styled.div`
  font-size: 2.5rem;
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Aligns the items to the start and end of the container */
  cursor: pointer;
`;

const MenuIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CategoryName = styled.span`
  margin-left: 2.2rem; 
`;

const SubRoute = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 0.8rem;
  font-size: 2.3rem;
  margin-left: 2.4rem; 

`;
