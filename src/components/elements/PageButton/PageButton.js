import React from 'react';
import PropTypes from 'prop-types';
import PageButtonStyle from '../../styles/PageButtonStyle';

const PageButton = ({ type, page, onClick }) => {
  return (
    <PageButtonStyle
      next={type === 'next'}
      prev={type === 'prev'}
      onClick={onClick}
    >
      <span>Page {type === 'prev' ? page - 1 : page + 1}</span>
      <svg>
        <use
          href={
            type === 'prev'
              ? 'images/icons.svg#icon-triangle-left'
              : 'images/icons.svg#icon-triangle-right'
          }
        />
      </svg>
    </PageButtonStyle>
  );
};

PageButton.propTypes = {
  type: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default PageButton;
