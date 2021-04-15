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
        {pages.map(page => (
          <span
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
            <img
              className={style.userImg}
              src={
                user.photos.small ||
                'https://imgholder.ru/100x100/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson'
              }
              alt=''
            />{' '}
            <br />
            {user.name} <br />
            {user.followed ? (
              <button onClick={() => props.unfollowContainer(user.id)}>
                unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.followContainer(user.id);
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
