import React from 'react';
import styled from 'styled-components';

import { InputDefault, ButtonDefault } from '../styles/reStyled';

const Container = styled.article`
  border-radius: 10px;
  overflow: hidden;
  background: rgb(255, 255, 255);
  box-shadow: rgb(194 194 194 / 40%) 0px 4px 15px;
  margin-bottom: 20px;
`;

const Head = styled.div`
  background: rgb(146, 168, 209);
  padding: 11px 20px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  & h2 {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: normal;
    color: rgb(255, 255, 255);
    margin: 0px;
  }
  & span {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: normal;
    color: rgb(255, 255, 255);
  }
`;

const Contents = styled.div`
  padding: 40px 20px 20px 40px;
`;

const Desc = styled.div`
  & span {
    font-weight: bolder;
    padding-right: 20px;
  }
`;

const Form = styled.form``;

const TitleInput = styled(InputDefault)``;

const DescInput = styled(InputDefault)`
  height: 157px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ButtonRed = styled(ButtonDefault)`
  background: rgb(249, 167, 167);
`;

const ButtonBlue = styled(ButtonDefault)`
  background: rgb(139, 174, 239);
`;

const Card = () => {
  return (
    <Container>
      <Head>
        <h2>싱글 직장인 와인 파티</h2>
        <span>20대 후반~30대 초반</span>
      </Head>
      <Contents>
        <Desc>
          <span>모임 일자</span>
          <span>2월 10일 토요일 오후 5시</span>
        </Desc>
        <div>
          <p>
            후기를 작성해주세요. <br /> 소정의 포인트가 지급됩니다.
          </p>
        </div>
        <Form>
          <div>
            <label>제목</label>
            <TitleInput />
          </div>
          <div>
            <label>내용</label>
            <DescInput />
          </div>
        </Form>
        <div>사진첨부들</div>
        <div>
          <ButtonRow>
            <ButtonRed>후기 작성</ButtonRed>
          </ButtonRow>
          <ButtonRow>
            <ButtonRed>후기 보기</ButtonRed>
            <ButtonBlue>후기 수정</ButtonBlue>
          </ButtonRow>
          <ButtonRow>
            <ButtonRed>취소</ButtonRed>
            <ButtonBlue>등록하기</ButtonBlue>
          </ButtonRow>
        </div>
      </Contents>
    </Container>
  );
};

export default Card;
