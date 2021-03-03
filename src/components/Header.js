import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import logoImage from '../assets/umis_logo.png';
import allamImage from '../assets/umis_allam.svg';
import myImage from '../assets/umis_my.svg';
import categoryImage from '../assets/umis_category.svg';
import ringImage from '../assets/umis_ring.svg';

const NavBarWrapper = styled.div`
  height: 130px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const NavBar = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0px 110px;
  & li {
    margin-left: 30px;
    & a {
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: bolder;
      font-size: 16px;
      line-height: 23px;
      color: rgb(68, 68, 68);
    }
  }
`;

const LogoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 230px 20px;
`;

const Menu = styled.div`
  display: flex;
  & img {
    padding: 0px 10px;
  }
`;

const CategoryRow = styled.div`
  padding: 20px 230px;
  border-top: 1px solid rgb(221, 221, 221);
  border-bottom: 1px solid rgb(221, 221, 221);
  & span {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: bolder;
    font-size: 20px;
    line-height: normal;
    color: rgb(0, 0, 0);
  }
  & img {
    padding: 0px 3px;
  }
`;

const Header = ({ isMobile }) => {
  return (
    <header>
      <NavBarWrapper id="header-navbar">
        <NavBar>
          <li>
            <a>회원가입</a>
          </li>
          <li>
            <a>로그인</a>
          </li>
        </NavBar>
      </NavBarWrapper>
      <LogoRow id="header-logo">
        <div>
          <a>
            <img src={logoImage} alt="logo" width="180px" />
          </a>
        </div>
        <Menu id="header-menu">
          <img src={allamImage} alt="allam" />
          <img src={myImage} alt="my" />
        </Menu>
      </LogoRow>
      <CategoryRow id="header-category">
        {isMobile ? (
          <>
            <img src={ringImage} alt="category" />
            <img src={categoryImage} alt="category" />
          </>
        ) : (
          <>
            <img src={categoryImage} alt="category" />
            <span>카테고리</span>
          </>
        )}
      </CategoryRow>
    </header>
  );
};

Header.propTypes = {
  isMobile: propTypes.bool.isRequired,
};

export default Header;
