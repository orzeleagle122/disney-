import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <Nav>
            <Logo src="/images/logo.svg" alt=""/>
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" alt={`logo`}/>
                    <span>Home</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" alt={`logo`}/>
                    <span>Search</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" alt={`logo`}/>
                    <span>Watchlist</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" alt={`logo`}/>
                    <span>Original</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" alt={`logo`}/>
                    <span>Movies</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" alt={`logo`}/>
                    <span>Series</span>
                </a>
            </NavMenu>
            <UserImg src={`https://avatars.githubusercontent.com/u/61784532?v=4`}/>
        </Nav>
    );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;

`;

const NavMenu = styled.div`
  display: flex;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }

`;

const UserImg = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  cursor: pointer;
  margin: auto 0;
`;