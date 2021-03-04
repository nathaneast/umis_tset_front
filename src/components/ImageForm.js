import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import plusImage from '../assets/umis_plus.svg';

const Container = styled.div`
  padding: 10px;
`;

const Button = styled.button`
  width: 100px;
  height: 100px;
  background: rgb(253, 253, 253);
  border: 2px dashed rgb(187, 187, 187);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & img {
    padding: 7px 0px;
  }
`;

const ImageForm = ({ cardNum, onClick }) => {
  return (
    <Container onClick={() => onClick(cardNum)}>
      <Button>
        <img src={plusImage} alt="plus" />
        <span>사진 첨부</span>
      </Button>
    </Container>
  );
};

ImageForm.propTypes = {
  cardNum: propTypes.number.isRequired,
  onClick: propTypes.func.isRequired,
};

export default ImageForm;
