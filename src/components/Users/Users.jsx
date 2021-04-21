import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { urlApi } from '../../constants';
import style from './Users.module.scss';

const Users = props => {
  let pagesTotal = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pagesTotal; i++) {
    pages.push(i);
  }
  return (
    <>
      <div>
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
      </div>
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
                onClick={() => {
                  axios
                    .delete(`${urlApi}/follow/${user.id}`, {
                      withCredentials: true,
                      headers: {
                        'API-KEY': 'e4e4830d-b9e4-4a7a-9698-235aa4feee3b',
                      },
                    })
                    .then(response => {
                      if (response.data.resultCode === 0) {
                        props.unfollow(user.id);
                      }
                    });
                }}
              >
                unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  axios
                    .post(
                      `${urlApi}/follow/${user.id}`,
                      {},
                      {
                        withCredentials: true,
                        headers: {
                          'API-KEY': 'e4e4830d-b9e4-4a7a-9698-235aa4feee3b',
                        },
                      }
                    )
                    .then(response => {
                      if (response.data.resultCode === 0) {
                        props.follow(user.id);
                      }
                    });
                }}
              >
                follow
              </button>
            )}
            <br />
            status: {user.status} <br />
            {'user.location.country' + ', ' + 'user.location.city'}
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default Users;
