import styled from 'styled-components';

const IngredientsListItemStyle = styled.li`
  display: flex;

  .recipe__icon {
    height: 1.8rem;
    width: 1.8rem;
    fill: #f59a83;
    border: 1px solid #f59a83;
    border-radius: 50%;
    padding: 2px;
    margin-right: 1rem;
    flex: 0 0 auto;
    margin-top: 0.1rem;
  }
  .recipe__count {
    margin-right: 0.5rem;
    flex: 0 0 auto;
  }
`;

export default IngredientsListItemStyle;
