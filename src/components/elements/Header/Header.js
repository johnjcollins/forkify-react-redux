import React from 'react';
import PropTypes from 'prop-types';
import HeaderStyle from './HeaderStyle';
import Search from '../Search/Search';
import Likes from '../Likes/Likes';

const Header = ({ onClick, numLikes, likes, onClickLike }) => {
  return (
    <HeaderStyle>
      <img src="images/logo.png" alt="Logo" className="header__logo" />
      <Search onClick={onClick} />
      <Likes numLikes={numLikes} likes={likes} onClick={onClickLike} />
    </HeaderStyle>
  );
};

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  numLikes: PropTypes.number.isRequired,
  likes: PropTypes.array.isRequired,
  onClickLike: PropTypes.func.isRequired
};

export default Header;
