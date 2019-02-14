import styled from 'styled-components';

const RecipeDetailsStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 8rem 3rem 3rem 3rem;

  .recipe__info {
    font-size: 1.5rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
  }

  .recipe__info:not(:last-child) {
    margin-right: 4rem;
  }

  .recipe__info-icon {
    height: 2rem;
    width: 2rem;
    fill: #f59a83;
    margin-right: 1rem;
  }

  .recipe__info-data {
    margin-right: 0.4rem;
    font-weight: 600;
  }

  .recipe__info-buttons {
    display: flex;
    margin-left: 1.5rem;
    visibility: hidden;
    opacity: 0;
    transform: translateY(5px);
    transition: all 0.4s;
  }

  .recipe:hover .recipe__info-buttons {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }

  .recipe__love {
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
  }

  .recipe__love:hover {
    transform: scale(1.07);
  }

  .recipe__love:focus {
    outline: none;
  }

  .recipe__love svg {
    height: 2.75rem;
    width: 2.75rem;
    fill: #fff;
  }
`;

export default RecipeDetailsStyle;
