import { signInTypes } from "./sign-in.types";
// import { environment } from '../../environment';
import history from '../../history';
import axios from 'axios';

export const updatePassword = (pass: string) => {
  return {
    payload: {
      pass
    },
    type: signInTypes.UPDATE_PASSWORD
  }
}

export const updateUsername = (userId: string) => {
  return {
    payload: {
      userId
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

export const loginSuccess = (data: any) => {
  return{ 
    payload: {
      currentUser: data.credentials,
      errorMessage: ''
    },
    type: signInTypes.LOGIN
  }
}

export const loginInvalid = (data: any) => {
  return{
    payload:{
      currentUser: null,
      errorMessage: "Invalid Username or Password"
    },
    type: signInTypes.LOGIN
  }
}

export const login = (e: React.FormEvent<HTMLFormElement>, credentials: any) => {
  return (dispatch: any) => {
    e.preventDefault();
    return axios.post(`http://localhost:8080/users/login`, 
      credentials

      
    )
      .then(resp => {
        switch (resp.status) {
          case 200:
            dispatch(loginSuccess(resp.data));
            history.push('/home');
            break;
          case 401:
            dispatch(loginInvalid(resp.data));
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

