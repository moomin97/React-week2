import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import './App.css';

const Box = (props) => {
    const data = useSelector((state) => state.Word.list);
    console.log(data);

    return ( 
        <div className='addBB'>
            {data.map((list, index) => {
                return (
                <BoxStyle>
                    <PP>단어</PP>
                    <BoxInText>{list.inputWord}</BoxInText>
                    <PP>설명</PP>
                    <BoxInText2>{list.inputSul}</BoxInText2>
                    <PP>예시</PP>
                    <BoxInText3>{list.inputEx}</BoxInText3>
                </BoxStyle>
                )
            })}
        </div>

    )
};

const BoxStyle = styled.div`
  background-color: transparent;
  border-radius: 20px;
  width: 350px;
  height: 170px;
  margin-left: 100px;
  border: 2px solid green;
  flex-direction: column;
  padding: 20px;
`;

const BoxInText = styled.h3`
  text-align: left;
  color: slateblue;
  margin: 0px;
`;

const BoxInText2 = styled.h4`
  text-align: left;
  color: slateblue;
  margin: 0px;
`;

const BoxInText3 = styled.h4`
  text-align: left;
  color: slateblue;
  margin: 0px;
  
`;

const PP = styled.p`
    text-align: left;
    margin: 0px;
`;
export default Box;