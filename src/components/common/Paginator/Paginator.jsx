import { useEffect, useState } from 'react';
import style from './Paginator.module.scss';

const Paginator = ({
  totalItemsCount,
  pageSize,
  setCurrentpage,
  currentPage,
  portionSize = 10,
}) => {
  let pagesTotal = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesTotal; i++) {
    pages.push(i);
  }

  const totalPortionsCount = Math.ceil(pagesTotal / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPageNumber = portionNumber * portionSize;

  useEffect(
    () => setPortionNumber(Math.ceil(currentPage / portionSize)),
    [currentPage]
  );

  pages = pages.filter(p => p >= leftPageNumber && p <= rightPageNumber);
  return (
    <div className={style.paginatorWrapper}>
      {portionNumber > 1 && (
        <button
          className={style.leftBtn}
          onClick={() => setPortionNumber(portionNumber - 1)}
        >
          prev
        </button>
      )}
      {pages.map((page, idx) => (
        <span
          key={idx}
          onClick={() => setCurrentpage(page)}
          className={`
                ${currentPage === page ? style.activePage : ''} ${
            style.paginationEl
          }`}
        >
          {page}
        </span>
      ))}
      {portionNumber < totalPortionsCount && (
        <button onClick={() => setPortionNumber(portionNumber + 1)}>
          next
        </button>
      )}
    </div>
  );
  //   return (
  //     <div>
  //       {pages.map((page, idx) => (
  //         <span
  //           key={idx}
  //           onClick={() => setCurrentpage(page)}
  //           className={`
  //                 ${currentPage === page ? style.activePage : ''} ${
  //             style.paginationEl
  //           }`}
  //         >
  //           {page}
  //         </span>
  //       ))}
  //     </div>
  //   );
};

export default Paginator;
