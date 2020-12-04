import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  >article{
    padding-top: 80px!important;
    background-color: #ffefef;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 5px 60px;
    h1{
      font-family: Ubuntu, sans-serif;
      font-size: clamp(1em, 1em + 1vw, 1.15em);
      margin-right: 10px;
    }
    div:first-child{
      display: flex;
      align-items: baseline;
      select{
        display: block;
        padding: 5px 10px;
        font-family: Inter, sans-serif;
        border: 2px solid transparent;
        border-radius: 5px;
        transition: all 0.4s;
        background: #FFFFFF;
        outline: none;
        cursor: pointer;
        :focus{
          border: 2px solid #FF5F5F;
          background: white;
        }
      }
    }
    div:last-child{
      display: flex;
      align-items: center;
      position: relative;
      input{
        width: 100%!important;
        display: block;
        padding: 5px 10px;
        font-family: Inter, sans-serif;
        border: 2px solid transparent;
        border-radius: 5px;
        transition: all 0.4s;
        background: #FFFFFF;
        outline: none;
        :focus{
          border: 2px solid #FF5F5F;
          background: white;
        }
      }
      button{
      
      }
    }
    @media(max-width: 630px){
      flex-direction: column;
      padding: 10px;
      padding-top: 90px!important;
      div{
        width: 100%;
        justify-content: space-between;
      }
    }
  }
  section{
    padding-top: 40px;
    article{
      padding: 5px 10px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 10px;
      >a{
        background: #f7f7fd;
      }
    }
  }
`;