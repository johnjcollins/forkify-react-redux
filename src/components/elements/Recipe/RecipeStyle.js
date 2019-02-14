import styled from 'styled-components';

const RecipeStyle = styled.div`
  background-color: #f9f5f3;
  border-top: 1px solid #fff;

  :hover .recipe__info-buttons {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
`;

export default RecipeStyle;
