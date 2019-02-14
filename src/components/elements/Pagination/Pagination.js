import React from 'react';
import PaginationStyle from './PaginationStyle';
import PageButton from '../PageButton/PageButton';

const Pagination = ({ onIncrement, onDecrement, currentPage, totalPages }) => {
  let showButtons;
  if (currentPage === 1 && currentPage < totalPages) {
    showButtons = 'next';
  } else if (currentPage < totalPages) {
    showButtons = 'both';
  } else if (currentPage === totalPages && totalPages > 1) {
    showButtons = 'prev';
  }
  return (
    <PaginationStyle>
      {showButtons === 'next' ? (
        <PageButton type="next" page={currentPage} onClick={onIncrement} />
      ) : null}
      {showButtons === 'both' ? (
        <React.Fragment>
          <PageButton type="prev" page={currentPage} onClick={onDecrement} />
          <PageButton type="next" page={currentPage} onClick={onIncrement} />
        </React.Fragment>
      ) : null}
      {showButtons === 'prev' ? (
        <PageButton type="prev" page={currentPage} onClick={onDecrement} />
      ) : null}
    </PaginationStyle>
  );
};

export default Pagination;
