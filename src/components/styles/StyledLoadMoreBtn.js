import styled from 'styled-components';

export const StyledLoadMoreBtn = styled.button`
  background: #000;
  width: 25%;
  min-width: 200px;
  height: 70px;
  color: #fff;
  transition: all 0.3s;
  border-radius: 40px;
  font-family: 'Abel', sans-serif;
  font-size: 28px;
  max-width: 1280px;
  display: block;
  margin: 20px auto;
  padding: 0 20px;
  outline: none;
  display: none;
  
  &.visiable {
    display:block;
  }
  
  &.loaded {
    :hover {
    cursor: pointer;
    opacity: 0.8;
    }
  }
  &.loading {
    opacity: 0.7;
    :hover {
    cursor: wait;
    }
  }

  
  
`;