import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createWord, loadWordFB, addWordFB } from './redux/modules/Word';
const Detail = (props) => {
    //     React.useEffect(() => {
    //   dispatch(loadWordFB());
    // }, [dispatch]);

    const history = useHistory();
    const dispatch = useDispatch(); 
    const inputWord = useRef(null);
    const inputSul = useRef(null);
    const inputEx = useRef(null);

    const addText = () => {
        dispatch(addWordFB({
            inputWord:inputWord.current.value,
            inputSul:inputSul.current.value,
            inputEx:inputEx.current.value,})
            );
            history.goBack("/");
        };

        // dispatch(createWord({

            // inputWord:inputWord.current.value,
            // inputSul:inputSul.current.value,
            // inputEx:inputEx.current.value,}));

    
    return (
        <DetailModal>
           <DetailText>단어 추가하기</DetailText>
           <div>
               <UnderText>단어</UnderText>
               <input type="text" ref={inputWord} className='InputBox'/>
               <UnderText>설명</UnderText>
               <input type="text" ref={inputSul} className='InputBox'/>
               <UnderText>예시</UnderText>
               <input type="text" ref={inputEx} className='InputBox'/>
           </div>
           <div>
               <button className='saveButton' onClick={addText}>저장하기</button>
           </div>
        </DetailModal>
    )
};

const DetailModal = styled.div`
    width: 300px;
    height: 500px;
    background-color: aliceblue;
    border-radius: 10px;
    margin: auto;
    padding: 10px 40px;
`;

const DetailText = styled.h3`
    color: slateblue;
    padding: 0px 0px;
    
`;

const UnderText = styled.h3`
    color: slateblue;
    text-align: left;
`;

export default Detail;