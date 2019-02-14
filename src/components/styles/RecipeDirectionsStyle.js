import styled from 'styled-components';

const RecipeDirectionsStyle = styled.div`
  padding: 4rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .recipe__directions-text {
    font-size: 1.5rem;
    text-align: center;
    width: 90%;
    margin-bottom: 3rem;
    color: #968b87;
  }

  .recipe__by {
    font-weight: 700;
  }

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

export default RecipeDirectionsStyle;
