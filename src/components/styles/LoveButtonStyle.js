import styled from 'styled-components';

const LoveButtonStyle = styled.button`
  background-image: linear-gradient(to right bottom, #fbdb89, #f48982);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  height: 4.5rem;
  width: 4.5rem;
  margin-left: auto;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    transform: scale(1.07);
  }

  :focus {
    outline: none;
  }

  & svg {
    height: 2.75rem;
    width: 2.75rem;
    fill: #fff;
  }
`;

export default LoveButtonStyle;
