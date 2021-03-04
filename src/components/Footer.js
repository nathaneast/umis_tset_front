import React from 'react';
import styled from 'styled-components';

import logoImage from '../assets/umis_logo.png';
import kakaoImage from '../assets/umis_kakao.png';
import appStoreImage from '../assets/umis_appStore.svg';
import playStoreImage from '../assets/umis_playStore.svg';

const Container = styled.footer`
  display: flex;
  padding: 40px 180px 94px 233px;
  border-top: 1px solid rgb(221, 221, 221);
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const Contents = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 180%;
`;

const MoveKaKao = styled.div`
  margin-top: 20px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: normal;
  text-decoration-line: underline;
  color: rgb(0, 0, 0);
  & span {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
`;

const MoveStore = styled.div`
  margin: 0px 15px;
  & img {
    padding: 10px;
  }
`;

const Menu = styled.div`
  display: flex;
  margin-top: 43px;
`;

const MenuColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 110px;
  & span {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: bolder;
    font-size: 16px;
    line-height: normal;
    color: rgb(0, 0, 0);
  }
  & ul {
    list-style-type: none;
    padding: 0px;
    & li {
      margin-top: 20px;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <Contents>
        <a>
          <img src={logoImage} alt="logo" width="180px" />
        </a>
        <p>
          주식회사 홍익인간 <br />
          대표자 : 이양록 <br />
          개인정보보호책임자 : 이성진 (연락처 : OOO-OOOO-OOOO) <br />
          사업자등록번호 : 778-86-01090 <br />
          대표번호 : OOO-OOOO-OOOO <br />
          카카오톡 플러스친구 바로가기 <br />
          업무시간 : 평일 OO~OO, 점심시간 OO~OO 제외, 주말/공휴일 제외) <br />
          통신판매업등록번호 : 2019-화성동부-0202 <br />
          주소 : 경기도 화성시 동탄기흥로 590, 동탄센트럴에이스타워 B동 518호
        </p>
        <MoveKaKao>
          <img src={kakaoImage} alt="kakao" width="40px" />
          <span>카카오톡 플러스친구 바로가기</span>
        </MoveKaKao>
        <MoveStore>
          <img src={appStoreImage} alt="appStoreImage" />
          <img src={playStoreImage} alt="playStoreImage" />
        </MoveStore>
        <p>Copyright All Rights Reserver.</p>
      </Contents>
      <Menu>
        <MenuColumn>
          <span>행사 바로가기</span>
          <ul>
            <li>행사 검색하기</li>
            <li>마감임박 행사</li>
            <li>지역별 행사</li>
            <li>요일별 행사</li>
          </ul>
        </MenuColumn>
        <MenuColumn>
          <span>고객센터</span>
          <ul>
            <li>공지사항</li>
            <li>FAQ</li>
            <li>1:1 문의</li>
            <li>제휴 문의</li>
            <li>개인정보처리방침</li>
          </ul>
        </MenuColumn>
      </Menu>
    </Container>
  );
};

export default Footer;
