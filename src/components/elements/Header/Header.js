import React from 'react';
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

export default Header;
