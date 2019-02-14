import styled from 'styled-components';

const IngredientsStyle = styled.div`
  padding: 4rem 5rem;
  font-size: 1.5rem;
  line-height: 1.4;
  background-color: #f2efee;
  display: flex;
  flex-direction: column;
  align-items: center;

  .btn-small,
  .btn-small:link,
  .btn-small:visited {
    font-size: 1.3rem;
    padding: 1rem 1.75rem;
    text-decoration: none;
  }

  .btn-small svg,
  .btn-small:link svg,
  .btn-small:visited svg {
    height: 1.5rem;
    width: 1.5rem;
    fill: currentColor;
  }
`;

export default IngredientsStyle;
