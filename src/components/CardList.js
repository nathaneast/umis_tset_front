import React, { useState, useCallback, useRef } from 'react';

import Card from './Card';

const CardList = () => {
  const [cardTitles, setCardTitles] = useState({});
  const [cardDescs, setCardDescs] = useState({});
  const [cardImages, setCardImages] = useState({});

  const [targetCardNum, setTargetCardNum] = useState('');
  const imageUpload = useRef();

  const onChangeImage = useCallback(
    (e) => {
      if (e.target.files[0]) {
        const fileType = e.target.files[0].type.split('/')[0];
        const fileName = e.target.files[0].name;
        const cardKey = `image_${targetCardNum}`;

        const newFile = () => {
          return cardImages[cardKey]
            ? [...cardImages[cardKey], fileName]
            : [fileName];
        };

        if (fileType === 'image') {
          setCardImages((prev) => {
            return {
              ...prev,
              [cardKey]: newFile(),
            };
          });
        }
      }
    },
    [targetCardNum, cardImages]
  );

  const onUplaodImage = useCallback(
    (cardNum) => {
      imageUpload.current.click();
      setTargetCardNum(cardNum);
    },
    [imageUpload.current, targetCardNum]
  );

  const onSubmit = useCallback(
    (cardNum) => {
      const title = cardTitles[`title_${cardNum}`];
      const desc = cardDescs[`desc_${cardNum}`];
      const image = cardImages[`image_${cardNum}`];

      const log = `후기 데이터 - 제목 : ${title} 내용 : ${desc} 파일 개수 : ${
        image ? image.length : 0
      } 파일 원본 이름 : ${image ? image.toString() : ''} `;

      console.log(log);
    },
    [cardTitles, cardDescs, cardImages]
  );

  const onSubmitHandler = useCallback(
    (cardNum) => {
      if (cardTitles[`title_${cardNum}`] && cardDescs[`desc_${cardNum}`]) {
        onSubmit(cardNum);
      } else {
        alert('제목, 내용을 입력 해주세요');
      }
    },
    [cardTitles, cardDescs]
  );

  const onChange = useCallback(
    (e, key) => {
      if (key === 'title') {
        setCardTitles({
          ...cardTitles,
          [e.target.name]: e.target.value,
        });
      } else if (key === 'desc') {
        setCardDescs({
          ...cardDescs,
          [e.target.name]: e.target.value,
        });
      }
    },
    [cardTitles, cardDescs]
  );

  return (
    <section>
      <div>
        <input
          type="file"
          name="imageUpload"
          hidden
          ref={imageUpload}
          onChange={onChangeImage}
        />
      </div>
      <div>
        {[...Array(7)].map((n, i) => (
          <Card
            key={i}
            cardNum={i + 1}
            onSubmitHandler={onSubmitHandler}
            onChange={onChange}
            onClickImage={onUplaodImage}
          />
        ))}
      </div>
    </section>
  );
};

export default CardList;
