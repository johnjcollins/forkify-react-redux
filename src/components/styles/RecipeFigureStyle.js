import styled from 'styled-components';

const RecipeFigureStyle = styled.figure`
  height: 30rem;
  position: relative;
  transform: scale(1.04) translateY(-1px);
  transform-origin: top;

  ::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right bottom, #fbdb89, #f48982);
    opacity: 0.6;
  }

  .recipe__img {
    width: 100%;
    display: block;
    height: 100%;
    object-fit: cover;
  }

  .recipe__title {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 20%) skewY(-6deg);
    color: #fff;
    font-weight: 700;
    font-size: 2.75rem;
    text-transform: uppercase;
    width: 70%;
    line-height: 1.95;
    text-align: center;
  }

  .recipe__title span {
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    padding: 1.3rem 2rem;
    background-image: linear-gradient(to right bottom, #fbdb89, #f48982);
  }
`;

export default RecipeFigureStyle;
