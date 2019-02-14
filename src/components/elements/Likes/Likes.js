import React from 'react';
import LikesStyle from './LikesStyle';
import LikesListStyle from '../../styles/LikesListStyle';
import LikesListItemStyle from '../../styles/LikeListItemStyle';
import { limitRecipeTitle } from '../../../helpers';

const Likes = ({ numLikes, likes, onClick }) => {
  return (
    <LikesStyle show={numLikes > 0}>
      <div className="likes__field">
        <svg className="likes__icon">
          <use href="images/icons.svg#icon-heart" />
        </svg>
      </div>
      <div className="likes__panel">
        <LikesListStyle>
          {likes.map(like => (
            <LikesListItemStyle key={like.id} onClick={() => onClick(like.id)}>
              <figure className="likes__fig">
                <img src={like.img} alt={like.title} />
              </figure>
              <div className="likes__data">
                <h4 className="likes__name">{limitRecipeTitle(like.title)}</h4>
                <p className="likes__author">{like.author}</p>
              </div>
            </LikesListItemStyle>
          ))}
        </LikesListStyle>
      </div>
    </LikesStyle>
  );
};

export default Likes;
