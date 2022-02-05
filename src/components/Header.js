import React from 'react';
import styled from 'styled-components';

function Header() {
  return(
  <Nav>
    <Logo src = "./images/logo.svg"></Logo>
    <NavMenu>
    <a>
      <img src='/images/home-icon.svg'></img>
      <span>Home</span>
    </a>
    <a>
      <img src='/images/search-icon.svg'></img>
      <span>Search</span>
    </a>
    <a>
      <img src='/images/watchlist-icon.svg'></img>
      <span>Watchlist</span>
    </a>
    <a>
      <img src='/images/original-icon.svg'></img>
      <span>originals</span>
    </a>
    <a>
      <img src='/images/movie-icon.svg'></img>
      <span>Movies</span>
    </a>
    <a>
      <img src='/images/series-icon.svg'></img>
      <span>Series</span>
    </a>
    </NavMenu>
    <UserImg src='/images/profile-icon.jpg'></UserImg>
  </Nav>
  ) 
}

export default Header;

const Nav = styled.nav`
  height : 70px;
  background: #090b13;
  display : flex;
  align-items : center;
  padding : 0 36px;
`

const Logo = styled.img`
  width : 80px;

`
const NavMenu = styled.div`
  display : flex;
  flex : 1;
  margin-left : 25px;
  cursor : pointer;
  a{
    display : flex;
    align-items : space-between;
    padding : 0 22px;

    img{
     height : 20px;
    }
  span{
      padding : 0 5px;
      letter-spacing : 1.42px;
      font-size : 13px;
      text-transform : uppercase;
      position : relative;

      &:after{
        content :"";
        height : 2px;
        background: white;
        position : absolute;
        left : 0;
        right : 0;
        bottom : -6px;
        transform : scaleX(0);
      }
    }
    &:hover{
      span:after{
        transform : scaleX(0.6);
        transition : 250ms ease-in;
      }
    }
  }
  
`
const UserImg = styled.img`
  width : 48px;
  height : 48px;
  border-radius : 50%;
  cursor : pointer;
  
`