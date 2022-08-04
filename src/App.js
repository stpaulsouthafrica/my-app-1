import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";


function App() {



  //HAMBURGER MENU ------------------------------------------
  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);
  useEffect(() => {
    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = event => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }
      toggleDrawer(false);
    };
    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);
  //HAMBURGER MENU ------------------------------------------





  return (

    //The screen minus navbar
    <Styles.Wrapper>
      
      {/* basic css settings */}
      <CSSReset /> 
      
      {/* navbar styling */}
      <Navbar.Wrapper>

        <Navbar.Title>St. Paul South Africa</Navbar.Title>

        <HamburgerButton.Wrapper onClick={() => toggleDrawer(true)}>
          <HamburgerButton.Lines />
        </HamburgerButton.Wrapper>

        <Navbar.Items ref={drawerRef} openDrawer={openDrawer}>
          <Navbar.Item>Home</Navbar.Item>
          <Navbar.Item>Blog</Navbar.Item>
          <Navbar.Item>About</Navbar.Item>
        </Navbar.Items>

      </Navbar.Wrapper>
    </Styles.Wrapper>
  );
}




const Styles = {
  Wrapper: styled.main`
    display: flex;
    background-color: pink;
    height: 100vh;
  `
};




const Navbar = {
  Wrapper: styled.nav`
    flex: 1;
    align-self: flex-start;
    padding: 1rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;

    
    // 40em == 640px
    @media only screen and (max-width: 40em) {
      position: fixed;
      width: 100vw;
      bottom: 1;
    }
  `,


  Title: styled.h1`
    padding: 0.5rem 1rem;
    color: white;
    text-shadow: .05em .05em 0 rgb(0,0,0);
  `,


  Items: styled.ul`
    display: flex;
    list-style: none;

    @media only screen and (max-width: 40em) {
      position: fixed;
      right: 0;
      top: 0;

      height: 100%;

      flex-direction: column;

      background-color: white;
      padding: 1rem 2rem;

      transition: 0.2s ease-out;


      transform: ${({ openDrawer }) =>
        openDrawer ? `translateX(0)` : `translateX(100%)`};
    }
  `,
  Item: styled.li`
    padding: 0 1rem;
    cursor: pointer;

    @media only screen and (max-width: 40em) {
      padding: 1rem 0;
    }
  `
};





const HamburgerButton = {
  Wrapper: styled.button`
    height: 3rem;
    width: 3rem;
    position: relative;
    font-size: 12px;

    display: none;

    @media only screen and (max-width: 40em) {
      display: block;
    }

    /* Remove default button styles */
    border: none;
    background: transparent;

    &:after {
      content: "";
      display: block;
      position: absolute;
      height: 150%;
      width: 150%;
      top: -25%;
      left: -25%;
    }
  `,


  Lines: styled.div`
    top: 50%;
    margin-top: -0.125em;

    &,
    &:after,
    &:before {
      /* Create lines */
      height: 4px;
      pointer-events: none;
      display: block;
      content: "";
      width: 100%;
      background-color: white;
      position: absolute;
      

  
    }

    &:after {
      /* Move bottom line below center line */
      top: -0.8rem;

      
    }

    &:before {
      /* Move top line on top of center line */
      top: 0.8rem;

      
    }
  `
};




//basic css settings
const CSSReset = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0; 
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; /*1rem = 10px*/
    box-sizing: border-box;      
  }  

  body {
    font-size: 1.4rem;
    font-family: sans-serif;
  }
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;





export default App;
