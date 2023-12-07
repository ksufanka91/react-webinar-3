import React, {memo} from 'react';
import {cn as bem} from '@bem-react/classname'
import "./style.css";

const Pagination = ({lastPage, currentPage, onChangePage}) => {

  const cn = bem('Pagination');

  const button = (number) => {
    return <button onClick={() => onChangePage(number)}
                   className={cn('button', {active: number === currentPage})}>{number}</button>;
  }

  const chowDotsPrev = currentPage > 3;
  const chowDotsNext = currentPage < lastPage - 2;


  return (
    <div className={cn()}>
      {button(1)}

      {chowDotsPrev && <div className={'dots'}>...</div>}

      {currentPage > 2 && button(currentPage - 1)}
      {currentPage > 1 && currentPage < lastPage && button(currentPage)}
      {currentPage < lastPage - 1 && button(currentPage + 1)}

      {chowDotsNext && <div className={'dots'}>...</div>}

      {button(lastPage)}
    </div>
  );
};


export default memo(Pagination);