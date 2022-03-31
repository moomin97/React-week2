import React from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector,} from 'react-redux';

import './App.css';
import { createWord, loadWordFB, addWordFB } from './redux/modules/Word';
import { useHistory } from 'react-router-dom';


const Box = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.Word.list);

    React.useEffect(() => {  
    dispatch(loadWordFB());
    // console.log("d아아아");
  }, [dispatch]);
    
    console.log(data);

    return ( 
        <Wrap>
            {data&&data.map((list, index) => {
                return (
                <BoxStyle key={index}>
                  <button className='De'></button>
                    <PP>단어</PP>
                    <BoxInText>{list.inputWord}</BoxInText>
                    <PP>설명</PP>
                    <BoxInText2>{list.inputSul}</BoxInText2>
                    <PP>예시</PP>
                    <BoxInText3>{list.inputEx}</BoxInText3>
                </BoxStyle>
                )
            })}
            
        </Wrap>

    )
};

const BoxStyle = styled.div`
  background-color: transparent;
  border-radius: 20px;
  width: 25vw;
  height: 170px;
  border: 2px solid green;
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  box-sizing: border-box;
  
`;

const BoxInText = styled.h3`
  text-align: left;
  color: black;
  margin: 0px;
`;

const BoxInText2 = styled.h4`
  text-align: left;
  color: black;
  margin: 0px;
`;

const BoxInText3 = styled.h4`
  text-align: left;
  color: blue;
  margin: 0px;
  
`;

const PP = styled.p`
    text-align: left;
    margin: 0px;
    color: slateblue;
`;


const Wrap = styled.div`
  width: calc((100% - 40px) / 3);
`;

export default Box;