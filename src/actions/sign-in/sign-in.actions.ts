import { signInTypes } from "./sign-in.types";
import { User } from "src/models/User";


export const updatePassword = (pass: string) => {
  return {
    payload: {
      pass
    },
    type: signInTypes.UPDATE_PASSWORD
  }
}

export const changeModal = () => {
  return {
    payload: {},
    type: signInTypes.CHANGE_MODAL
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

export const updateForgotError = (errorForgotMessage: string) => {
  return {
    payload: {
      errorForgotMessage
    },
    type: signInTypes.UPDATE_FORGOT_ERROR
  }
}

export const changeReset = () => {
  return {
    payload: {},
    type: signInTypes.CHANGE_RESET
  }
}

// export const loginSuccess = (data: any) => {
//   return{ 
//     payload: {
//       currentUser: data.credentials,
//       errorMessage: ''
//     },
//     type: signInTypes.LOGIN
//   }
// }

// export const loginInvalid = (data: any) => {
//   return {
//     payload: {
//       currentUser: null,
//       errorMessage: "Invalid Username or Password"
//     },
//     type: signInTypes.LOGIN
//   }
// }

export const login = (jwt: string, user: any) => {
  const currentUser = new User({
    assocId: user.userId,
    emailAddress: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    roleId: user.role,
    uId: user.associateId
  })
  return {
    payload: {
      currentUser,
      jwt
    },
    type: signInTypes.LOGIN
  }
}

export const logout = () => {

  return {
    payload: {},
    type: signInTypes.LOGOUT
  }
}

