import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 10;
  padding: 15px 25px;
  background: #FF5F5F;
 
  >a:first-child{
    display: flex;
    align-items: center;
    text-decoration: none;
    img{
      width: 35px;
      margin-right: 5px;
    }
    span{
      font-family: Poppins, sans-serif;
      font-size: 16px;
      color: #FFFFFF;
      font-weight: 600;
      font-style: italic;
    }
  }
  article{
    display: none;
  }
  div:last-child{
    display: flex;
    align-items: center;
    div{
      >a{
        display: flex;
        align-items: center;
        padding: 5px 10px;
        border-radius: 5px;
        text-decoration: none;
        margin-right: 20px;
        img{
          width: 20px;
          margin-right: 5px;
        }
        span{
          font-family: Ubuntu, sans-serif;
          font-size: 14px;
          color: #303030;
        }
      }
    } 
  }
  @media(max-width: 500px){
    div:last-child{
      display: none;
    }
    article{
      display: block;
    }
  }
`;