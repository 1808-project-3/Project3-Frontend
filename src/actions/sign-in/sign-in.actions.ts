import { signInTypes } from "./sign-in.types";
import { environment } from '../../environment';
import history from '../../history';

export const updatePassword = (password: string) => {
  return {
    payload: {
      password
    },
    type: signInTypes.UPDATE_PASSWORD
  }
}

export const updateUsername = (username: string) => {
  return {
    payload: {
      username
    },
    type: signInTypes.UPDATE_USERNAME
  }
}

export const updateError = (errorMessage: string) => {
  return {
    payload: {
      errorMessage
    },
    type: signInTypes.UPDATE_ERROR
  }
}

export const login = (e: React.FormEvent<HTMLFormElement>, credentials: any) => {
  return (dispatch: any) => {
    e.preventDefault();
    return fetch(`${environment.context}users/login`, {
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
    })
      .then(resp => {
        if (resp.status === 200) {
          return resp.json().then(data => ({ status: resp.status, body: data }));
        } else {
          return resp.text().then(data => ({ status: resp.status, body: data }));
        }
      })
      .then(resp => {
        switch (resp.status) {
          case 200:
            dispatch({
              payload: {
                currentUser: resp.body,
                errorMessage: ''
              },
              type: signInTypes.LOGIN
            });
            history.push('/profile');
            break;
          case 401:
            dispatch({
              payload: {
                currentUser: null,
                errorMessage: 'Invalid username or password'
              },
              type: signInTypes.LOGIN
            });
            break;
          default:
            throw new Error("Failed to login at this time");
        }
      })
      .catch(err => {
        dispatch({
          payload: {
            currentUser: null,
            errorMessage: 'Failed to login at this time'
          },
          type: signInTypes.LOGIN
        });
        console.log(err);
      });
  }
}

