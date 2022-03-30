import React from 'react';
import styled from 'styled-components';
import './App.css';
import { useHistory } from 'react-router-dom';

const Header = (props) => {
    const history = useHistory();
    return (
    <div>
        <Title onClick={() => {
            history.push("/");
        }}>나만의 단어장

        <Line />
        </Title>
        <div>
            <button onClick={() => {
                history.push("/Detail");
            }}>단어 추가하기</button>
        </div>
    </div>
    )
};

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted green;
  max-width: 350vw;
  width: 100vw;
`;

const Title = styled.h1`
  color: slateblue;
  font-size: 25px;
  
`;



export default Header;