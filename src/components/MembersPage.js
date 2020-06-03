import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  user,
  logout,
  loggedoutMessage,
  getLoginMessage,
} from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';

const USERS_URL = 'http://localhost:9001/users';

export const MembersPage = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const userId = useSelector((store) => store.user.login.userId);
  const errorMessage = useSelector((store) => store.user.login.errorMessage);
  const loginMessage = useSelector((store) => store.user.login.loginMessage);

  const handleSecretStuff = (event) => {
    event.preventDefault();
    dispatch(getLoginMessage(userId, accessToken));
  };

  if (accessToken) {
    return (
      <div>
        {errorMessage && <h4>Error Message : {`${errorMessage}`}</h4>}
        {loginMessage && <h4>Secret Message : {`${loginMessage}`}</h4>}
        <p>You are logged in now, {user.name}</p>
        <p>{loginMessage}</p>
        <button type='submit' onClick={(e) => dispatch(logout())}>
          LOGGING OUT
        </button>
        <button type='submit' onClick={(e) => dispatch(getLoginMessage())}>
          SEE SECRET
        </button>
      </div>
    );
  } else {
    return <p>you are not logged in</p>;
  }
};

// export const MembersPage = () => {
//   const dispatch = useDispatch();
//   const accessToken = useSelector((store) => store.user.login.accessToken);
//   const userId = useSelector((store) => store.user.login.userId);
//   const [loggedIn, setLoggedIn] = useState(false);

//   const errorMessage = useSelector((store) => store.user.login.errorMessage);
//   const loginMessage = useSelector((store) => store.user.login.loginMessage);

//   useEffect(() => {
//     fetch(`${USERS_URL}/${userId}`, {
//       method: 'GET',
//       headers: { Authorization: accessToken },
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error(response.json());
//         }
//       })
//       .then(() => {
//         setLoggedIn(true);
//       })
//       .catch((err) => {
//         console.log('ERROR', err);
//       });
//   }, [userId, accessToken]);

//   if (loggedIn) {
//     return (
//       <div>
//         {errorMessage && <h4>Error Message : {`${errorMessage}`}</h4>}
//         {/* {loginMessage && <h4>Secret Message : {`${loginMessage}`}</h4>} */}
//         {/* why is this not working? */}
//         <p>You are logged in now, {user.name}</p>
//         <p>{loginMessage}</p>
//         <button type='submit' onClick={(e) => dispatch(logout())}>
//           LOGGING OUT
//         </button>
//       </div>
//     );
//   } else {
//     return <p>you are not logged in</p>;
//   }
// };