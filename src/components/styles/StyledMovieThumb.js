import styled from 'styled-components';

export const StyledMovieThumb = styled.div`
  .movieStats {
    display: inline-block;
    position: relative;
    left: 0;
    top: 0;
 

    img {
      position: relative;
      top: 0;
      left:0;
      z-index: 0;
      display: block;
    }

    .movieName {
      position: absolute;
      bottom:0;
      left:0;
      padding: 5px;
      border-radius: 0 0 18px 18px;
      font-size: 20px;
      background-color: rgba(0,0,0,0.3);
      color: white;
      object-fit: cover;
      width: calc(100% - 10px);
      opacity: 0;
      pointer-events : none;
    }

    :hover {
      cursor: pointer;
      > .movieName {
        opacity: 1;
      }
    }

  }
  
  img {
    width: 100%;
    height: auto;
    /* max-height: 350px; */
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
    :hover {
      opacity: 0.9;
    }
    /* @media screen and (max-width: 1024px) {
      height: 300px;
    }
    @media screen and (max-width: 768px) {
      height: 350px;
    }
    @media screen and (max-width: 600px) {
      max-height: 300px;
    }
    @media screen and (max-width: 375px) {
      max-height: 450px;
    } */
    .clickable {
      cursor: pointer;
    }
  }

`;