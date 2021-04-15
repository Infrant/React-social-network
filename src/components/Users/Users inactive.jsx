import * as axios from 'axios';

const Users = ({
  followContainer,
  unfollowContainer,
  setUsersContainer,
  state,
}) => {
  const setUsers = () => {
    if (state.users.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          debugger;
          setUsersContainer(response.data.items);
        });
    }
  };

  const usersEl = state.users.map(user => {
    return (
      <div key={user.id}>
        {user.userName} <br />
        {user.followed ? (
          <button onClick={() => unfollowContainer(user.id)}>unfollow</button>
        ) : (
          <button
            onClick={() => {
              followContainer(user.id);
            }}
          >
            follow
          </button>
        )}
        <br />
        status: {user.status} <br />
        {user.location?.country + ', ' + user.location?.city}
        <hr />
      </div>
    );
  });
  return (
    <>
      {state.users.length === 0 ? (
        <button onClick={setUsers}>get users</button>
      ) : (
        usersEl
      )}
    </>
  );
};

export default Users;
