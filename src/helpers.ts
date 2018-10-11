import { store } from './Store';
import { User } from './models/User';

export const getCurrentUser = () => {
  const currentUser = store.getState().signIn.currentUser;
  return currentUser ? new User(currentUser) : null;
}