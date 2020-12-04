import styled from 'styled-components';

import events from '../../global/assets/events.svg';

export const FormContainer = styled.section`
  height: 100vh;
  padding-top: 80px;
  padding-bottom: 20px;  
  background-image: url(${events});
  background-size: 30%;
  background-position: bottom right;
  background-repeat: no-repeat;
  background-attachment: fixed;
  @media(max-width: 1170px){
    background-image: none;
  }
  input, textarea{
    width: 100%!important;
    display: block;
    padding: 5px 10px;
    font-family: Inter, sans-serif;
    border: 2px solid transparent;
    border-radius: 5px;
    transition: all 0.4s;
    margin-top: 5px;
    background: #FFFFFF;
    outline: none;
    :focus{
      border: 2px solid #FF5F5F;
    }
    :hover{
      
    }
  }
  label{
    font-family: Ubuntu, sans-serif; 
    font-size: 14px;
    font-weight: 500;
  }
  textarea{
    resize: none;
    height: 80px;
  }
  form{
    width: 95%;
    max-width: 550px;
    font-family: Inter, sans-serif;
    background: #FFEFEF;
    border-radius: 10px;
    margin: auto;
    padding: 20px 3%;
    
  }
  header{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
    a img{
      width: 30px;
      margin-bottom: 5px;
      margin-right: 20px;
    }
    h1{
      color: #505050;
      text-align: center;
      font-family: Ubuntu, sans-serif;
      font-size: clamp(1em, 1em + 1vw, 1.25em);
    }
  }
  section{
    article{
      display: flex;
      align-items: center;
      >div{
        display: flex;
        align-items: center;
      }
      label{
        margin-right: 5px;
      }
      input{
        width: 100%!important;
        display: block;
        padding: 5px 10px;
        font-family: Inter, sans-serif;
        border: 2px solid transparent;
        border-radius: 5px;
        transition: all 0.4s;
        background: #FFFFFF;
        margin-top: 5px;
        outline: none;
        :focus{
          border: 2px solid #FF5F5F;
          background: white;
        }
      }
    }
  }
`;

export const FormBox = styled.div`
  width: 100%;
  margin: 10px auto;
`;

export const FormDuoBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin: 10px 0px;
  @media(max-width: 600px){
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
    div:first-child{
      width: 100%;
    }
    div input{
      display: block;
      width: 100%!important;
    }
    div.PhoneInputCountry{
      width: 15%;
    }
  }
`;

export const SubmitButton = styled.button`
  display: block;
  width: 100%;
  max-width: 400px;
  background: #FF5F5F;
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 8px 20px;
  margin-top: 30px!important;
  margin: auto;
  cursor: pointer;
  font-family: Inter, sans-serif;
  transition: all 0.4s;
  outline: none;
  :focus{
    border-color: #303030;
  } 
`;