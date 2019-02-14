import styled from 'styled-components';

const TinyButton = styled.button`
  height: 1.75rem;
  width: 1.75rem;
  border: none;
  background: none;
  cursor: pointer;

  & svg {
    height: 100%;
    width: 100%;
    fill: #f59a83;
    transition: all 0.3s;
  }

  :focus {
    outline: none;
  }

  :hover svg {
    fill: #f48982;
    transform: translateY(-1px);
  }

  :active svg {
    fill: #f48982;
    transform: translateY(0);
  }

  :not(:last-child) {
    margin-right: 0.3rem;
  }
`;

export default TinyButton;
