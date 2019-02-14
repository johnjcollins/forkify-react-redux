import styled from 'styled-components';

const ShoppingListItemStyle = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 1.3rem 0;
  border-bottom: 1px solid #f2efee;
  position: relative;

  .shopping__count {
    flex: 0 0 7.5rem;
    padding: 0.4rem 0.5rem;
    border: 1px solid #f2efee;
    border-radius: 3px;
    margin-right: 2rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
  }

  .shopping__count p {
    font-size: 1.2rem;
  }

  .shopping__description {
    flex: 1;
    font-size: 1.3rem;
    margin-top: 0.4rem;
    margin-right: 1.5rem;
  }

  .shopping__delete {
    margin-top: 0.5rem;
    position: absolute;
    right: 0;
    background-image: linear-gradient(
      to right,
      transparent 0%,
      #fff 40%,
      #fff 100%
    );
    width: 3.75rem;
    padding-left: 2rem;
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s;
  }

  :hover .shopping__delete {
    opacity: 1;
    visibility: visible;
  }
`;

export default ShoppingListItemStyle;
