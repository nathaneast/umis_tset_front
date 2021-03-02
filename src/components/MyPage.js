import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const Container = styled.div`
  width: 880px;
  margin: 0px auto;
  margin-top: 72px;
`;

const NavBarWrapper = styled.nav`
  padding: 15px 0px;
  margin-bottom: 30px;
`;

const NavBar = styled.ul`
  width: 880px;
  padding: 0px;
  margin: 0px auto;
  display: flex;
  list-style-type: none;
  & li {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: normal;
    color: rgb(34, 34, 34);
    margin-right: 60px;
    text-decoration: none;
  }
`;

const MorePost = styled.div`
  text-align: center;
  margin: 40px 0px;
  & button {
    width: 300px;
    height: 40px;
    border: none;
    background: rgb(253, 253, 253);
    box-shadow: rgb(194 194 194 / 40%) 0px 4px 15px;
    border-radius: 10px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: normal;
    color: rgb(34, 34, 34);
  }
`;

const MyPage = () => {
  return (
    <Container>
      <div>
        <h1>마이페이지</h1>
      </div>
      <NavBarWrapper>
        <NavBar>
          <li>
            <a>신청 내역</a>
          </li>
          <li>
            <a>찜한 모임</a>
          </li>
          <li>
            <a>포인트</a>
          </li>
          <li>
            <a>내 정보</a>
          </li>
          <li>
            <a>후기 관리</a>
          </li>
          <li>
            <a>문의 내역</a>
          </li>
        </NavBar>
      </NavBarWrapper>
      <section>
        {[...Array(7)].map((n, i) => (
          <Card key={i} />
        ))}
      </section>
      <MorePost>
        <button>더 보기</button>
      </MorePost>
    </Container>
  );
};

export default MyPage;
