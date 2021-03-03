import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import { InputDefault, ButtonDefault } from '../styles/reStyled';
import ImageForm from './ImageForm';

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

const FormInputItem = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
  padding: 10px 0px;
`;

const ImageFormList = styled.div`
  display: flex;
  padding-left: 70px;
`;

const TitleInput = styled(InputDefault)``;

const TextArea = styled.textarea`
  width: 100%;
  background: rgb(253, 253, 253);
  border: 1px solid rgb(187, 187, 187);
  box-sizing: border-box;
  border-radius: 5px;
  padding: 13px 20px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: normal;
  height: 170px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ButtonRed = styled(ButtonDefault)`
  background: rgb(249, 167, 167);
  padding: 10px;
`;

const ButtonBlue = styled(ButtonDefault)`
  background: rgb(139, 174, 239);
  padding: 10px;
`;

const Card = ({ cardNum, onSubmitHandler, onChange, onClickImage }) => {
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
        <article>
          <FormInputItem>
            <label>제목</label>
            <TitleInput
              onChange={(e) => onChange(e, 'title')}
              name={`title_${cardNum}`}
              placeholder="제목을 입력하세요."
            />
          </FormInputItem>
          <FormInputItem>
            <label>내용</label>
            <TextArea
              onChange={(e) => onChange(e, 'desc')}
              name={`desc_${cardNum}`}
              placeholder="내용을 입력하세요. 30자~500자 등록 가능"
            />
          </FormInputItem>
          <ImageFormList>
            {[...Array(3)].map((n, i) => (
              <ImageForm key={i} cardNum={cardNum} onClick={onClickImage} />
            ))}
          </ImageFormList>
          <div>
            <ButtonRow>
              <ButtonRed onClick={() => onSubmitHandler(cardNum)}>
                후기 작성
              </ButtonRed>
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
        </article>
      </Contents>
    </Container>
  );
};

Card.propTypes = {
  cardNum: propTypes.number.isRequired,
  onSubmitHandler: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
  onClickImage: propTypes.func.isRequired,
};

export default Card;
