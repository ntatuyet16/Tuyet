// {useState} 
// burgerState=false
// gán cho nav  <Nav  show={burgerState}>
// if(show==true){
//     translateX(0);
// }
// else{translateX(100%)}
// transform: ${props => props.show ?"translateX(0)":"translateX(100%)"};
//  const [burgerState,setBurgerState]=useState(false);
// <Icon onClick={() =>setBurgerState(true)} />
//          <CustomClose onClick={() =>setBurgerState(false)}/>
import React,{useState} from "react";
import styled from "styled-components";
import { FaBars , FaRegWindowClose } from "react-icons/fa";
const Header = () => {
    // 
   const [burgerState,setBurgerState]=useState(false);
  return (
    <Container>
      <a href="#">
        <img src="../image/logo.tentoi.png" />
      </a>
      <Menu>
        <a href="#"> Model S </a>
        <a href="#"> Model 3 </a>
        <a href="#"> Model X </a>
        <a href="#"> Model Y </a>
        <a href="#"> Solar Roof </a>
        <a href="#"> Solar Panels </a>
      </Menu>
      <MenuRight>
        <a href="#">Shop </a>
        <a href="#">Account </a>
        <Icon onClick={() =>setBurgerState(true)} />
      </MenuRight>
      <Nav  show={burgerState}>
          <CloseButton>
              <CustomClose onClick={() =>setBurgerState(false)}/>
                  
          </CloseButton>
         <ul>
             <li> <a href = ""> Thu Yen</a> </li>
             <li> <a href = ""> Anh Tuyet</a> </li>
             <li> <a href = ""> Minh Phuong</a> </li>
             <li> <a href = ""> Hong Van</a> </li>
             <li> <a href = ""> Nhu Quynh </a> </li>
         </ul>
      </Nav>
    </Container>
  );
};

export default Header;
const Container = styled.div`
  max-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  img {
    width: 100px;
    height: 50px;
    padding: 0px 20x;
  }
`;
const Menu = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }

  a {
    text-decoration: none;
    margin-left: 10px;
    color: black;
    border-radius: 10px;
    padding: 3px;
  }
  a:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
const MenuRight = styled(Menu)`
  margin-right: 10px;
  @media only screen and (max-width: 768px) {
    display: flex;
  }
  display: flex;
  align-items: center;
`;
const Icon = styled(FaBars)`
  font-size : 14px;
  margin-left:10px;
`;
const Nav = styled.div`
position :fixed; 
top : 0;
right : 0;
bottom : 0;
background-color :white;
display :flex;
flex-direction : column;
align-items : start;
width : 250px;
transition: transform 0.5s ease-in-out;
transform: ${props => props.show ?"translateX(0)":"translateX(100%)"};
ul {
    list-style : none;
    line-height : 1.5;
    padding : 10px;
}
li { 
    display :flex;
    
    a {
    text-decoration: none;
    }
a:hover {
    background-color :rgba(0, 0, 0, 0.3) ;
    width : 150px;
    border-radius: 5px;
}
}
@media only screen and (max-width: 768px){
    width : 180px;
}
`
const CloseButton = styled.div`
display : flex;
justify-content : flex-end ;
width : 100%;
`
const CustomClose = styled(FaRegWindowClose)`
font-size : 28px;
height : 50px;
cursor : pointer;
`