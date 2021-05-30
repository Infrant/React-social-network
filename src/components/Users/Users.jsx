import { NavLink } from 'react-router-dom';
import Loader from '../common/Loader/Loader';
import Paginator from '../common/Paginator/Paginator';
import style from './Users.module.scss';

const Users = props => {
  // let pagesTotal = Math.ceil(props.totalUsersCount / props.pageSize);
  // const pages = [];
  // for (let i = 1; i <= pagesTotal; i++) {
  //   pages.push(i);
  // }
  return (
    <>
      <Paginator
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        setCurrentpage={props.setCurrentpage}
        currentPage={props.currentPage}
      />
      {/* <div>
        {pages.map((page, idx) => (
          <span
            key={idx}
            onClick={() => props.setCurrentpage(page)}
            className={`
                ${props.currentPage === page ? style.activePage : ''} ${
              style.paginationEl
            }`}
          >
            {` ${page},`}&nbsp;
          </span>
        ))}
      </div> */}
      {props.isLoading ? (
        <Loader />
      ) : (
        <div className={style.usersWrapper}>
          {props.users.map(user => {
            return (
              <div key={user.id}>
                <NavLink to={`/profile/${user.id}`}>
                  <img
                    className={style.userImg}
                    src={
                      user.photos.small ||
                      'https://imgholder.ru/100x100/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson'
                    }
                    alt=''
                  />
                </NavLink>
                <br />
                {user.name} <br />
                {user.followed ? (
                  <button
                    disabled={props.followingProgress.some(
                      id => id === user.id
                    )}
                    onClick={() => props.unfollow(user.id)}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingProgress.some(
                      id => id === user.id
                    )}
                    onClick={() => props.follow(user.id)}
                  >
                    follow
                  </button>
                )}
                <br />
                status: {user.status} <br />
                user.location.country and user.location.city
                <hr />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Users;
