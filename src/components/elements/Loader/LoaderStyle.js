import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
`;

const LoaderStyle = styled.div`
  margin: 5rem auto;
  text-align: center;

  & svg {
    height: 5.5rem;
    width: 5.5rem;
    fill: #f59a83;
    transform-origin: 44% 50%;
    animation: ${rotate} 1.5s infinite linear;
  }
`;

export default LoaderStyle;
