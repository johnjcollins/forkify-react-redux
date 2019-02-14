import styled from 'styled-components';

const LinkButtonStyle = styled.a`
  font-size: 1.3rem;
  padding: 1rem 1.75rem;
  text-decoration: none;
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
    height: 1.5rem;
    width: 1.5rem;
    fill: currentColor;
  }
`;

export default LinkButtonStyle;
