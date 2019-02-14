import styled from 'styled-components';

const PageButtonStyle = styled.button`
  color: #f59a83;
  font-size: 1.2rem;
  border: none;
  background-color: #f9f5f3;
  padding: 0.8rem 1.2rem;
  border-radius: 10rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s;
  flex-direction: ${props => (props.prev ? 'row-reverse' : 'row')}
  float: ${props => (props.prev ? 'left' : 'right')}

  & svg {
    height: 1.5rem;
    width: 1.5rem;
    fill: currentColor;
    margin: 0 0.2rem;    
  }

  & span {
    margin: 0 0.4rem;
  }

  :hover {
    color: #f48982;
    background-color: #f2efee;
  }
  
  :focus {
    outline: none;
  }
`;

export default PageButtonStyle;
