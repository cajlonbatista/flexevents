import styled from 'styled-components';


export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  text-decoration: none;
  border-radius: 10px;
  transition: all 0.4s;
  background: #f9f9f9;
  position: relative;
  :focus,:hover{
    box-shadow: 0px 0px 3px 0px rgba(183,183,183,0.75);
  }
  >header{
    display: flex;
    justify-content: space-between;
    a:hover{
      text-decoration: underline;
    }
    div:first-child{
      border-radius: 10px;
      padding: 5px;
      cursor: pointer;
    }
    span{
      padding: 5px 10px;
    }
  }
  >article{
    padding: 10px 20px!important;
    span{
      font-family: Open Sans, sans-serif;
      font-size: 13px;
    }
    h1{
      font-family: Ubuntu, sans-serif;
      font-size: 20px;
    }
    p{
      font-family: Open Sans, sans-serif;
      font-size: 14px;
      color: #303030;
      text-align: justify;
    }
  }
`;

export const DialogContent = styled.div`

`;