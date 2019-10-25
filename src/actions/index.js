import actions from './actions';

export const changeIsUserSignedIn = (isSignedIn) => {
  return {
    type: actions.CHANGE_IS_USER_SIGNED_IN,
    payload: isSignedIn
  };
};

export const setUser = (user) => {
  return {
    type: actions.SET_USER,
    payload: user
  };
};
