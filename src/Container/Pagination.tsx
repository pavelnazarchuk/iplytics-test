import * as React from 'react';

const Pagination: React.FC<{
  totalCount: number;
  offset: number;
  limit: number;
  onChangePage: (type: 'prev' | 'next') => void;
}> = ({ totalCount, offset, limit, onChangePage }) => {
  const amountOfPages = Math.floor(totalCount / limit);
  const currentPages =
    amountOfPages - Math.floor((totalCount - offset) / limit) + 1;

  return (
    <div className="pagination">
      <p className="pagination__title">Total amount of pages {amountOfPages}</p>
      <p className="pagination__title">Current Page is {currentPages}</p>
      <div className="pagination__buttons">
        <button
          className="button pagination__button"
          onClick={() => onChangePage('prev')}
        >
          prev page
        </button>
        <button
          className="button pagination__button"
          onClick={() => onChangePage('next')}
        >
          next page
        </button>
      </div>
    </div>
  );
};

export default Pagination;
