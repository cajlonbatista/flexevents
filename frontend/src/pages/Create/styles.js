import styled from 'styled-components';

import events from '../../global/assets/events.svg';

export const SelectEvent = styled.section`
  width: 100vw;
  height: 100vh;
  padding-top: 80px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-image: url(${events});
  background-size: 30%;
  background-position: bottom right;
  background-repeat: no-repeat;

  form{
    width: 100%;
    max-width: 500px;
    font-family: Inter, sans-serif;
    background: #FFEFEF;
    border-radius: 10px;
    border: 2px solid transparent;
    margin: auto;
    padding: 20px;
    h1{
      font-family: Ubuntu, sans-serif;
      font-size: 19px;
      color: #303030;
      margin: 20px 5px;
      text-align: center;
    }
    button{
      width: 100%;
      max-width: 200px;
      display: block;
      margin: 20px auto;
      padding: 10px;
      font-family: Inter, sans-serif;
      font-size: 14px;
      color: #303030;
      background: #ff7f7f;
      font-weight: 500;
      border: 2px solid transparent;
      transition: all 0.4s;
      outline: none;
      border-radius: 5px;
      cursor: pointer;
      :hover{
        border-color: white;
      }
      :focus{
        border-color: #303030;
      }
    }
  }
`;