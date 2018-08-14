import { DISMISS_NOTIFICATION } from '../actions/actionTypes';

export const dismissNotification = () => dispatch => {
  dispatch({ type: DISMISS_NOTIFICATION });
};
