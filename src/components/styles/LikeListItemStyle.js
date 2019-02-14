import styled from 'styled-components';

const LikesListItemStyle = styled.li`
  display: flex;
  align-items: center;
  padding: 1.5rem 3rem;
  transition: all 0.3s;
  border-right: 1px solid #fff;
  text-decoration: none;

  :hover {
    background-color: #f9f5f3;
    transform: translateY(-2px);
  }

  .likes__fig {
    flex: 0 0 5.5rem;
    border-radius: 50%;
    overflow: hidden;
    height: 5.5rem;
    margin-right: 2rem;
    position: relative;
    backface-visibility: hidden;
  }

  .likes__fig::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right bottom, #fbdb89, #f48982);
    opacity: 0.4;
  }
  .likes__fig img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s;
  }

  .likes__name {
    font-size: 1.3rem;
    color: #f59a83;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 0.3rem;
  }

  .likes__author {
    font-size: 1.1rem;
    color: #968b87;
    text-transform: uppercase;
    font-weight: 600;
  }
`;

export default LikesListItemStyle;
