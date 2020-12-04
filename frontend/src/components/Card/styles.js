import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const CardContainer = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  border-radius: 10px;
  transition: all 0.4s;

  :focus,:hover{
    box-shadow: 0px 0px 3px 0px rgba(183,183,183,0.75);
  }
  >header{
    display: flex;
    justify-content: space-between;
    span:first-child{
      padding: 5px 10px;
      border-radius: 10px 5px 5px 5px;
    }
    span:last-child{
      margin: 5px 10px;
    }
    span{
      color: #303030;
    }
  }
  >article{
    padding: 5px 10px;
    h1{
      font-family: Ubuntu, sans-serif;
      font-size: 17px;
    }
    p{
      font-family: Open Sans, sans-serif;
      font-size: 13px;
      color: #303030;
    }
  }
`;