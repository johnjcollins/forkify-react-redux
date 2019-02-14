import styled from 'styled-components';

const ButtonStyle = styled.button`
  padding: 1.3rem 3rem;
  font-size: 1.4rem;
  background-image: linear-gradient(to right bottom, #fbdb89, #f48982);
  border-radius: 10rem;
  border: none;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s;

  :hover {
    transform: scale(1.05);
  }

  :focus {
    outline: none;
  }

  & > *:first-child {
    margin-right: 1rem;
  }

  & svg {
    height: 2.25rem;
    width: 2.25rem;
    fill: currentColor;
  }
`;

export default ButtonStyle;
