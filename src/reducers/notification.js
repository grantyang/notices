import {
  TRANSFORM_VALUE_LOAD,
  TRANSFORM_VALUE_SUCCESS,
  TRANSFORM_VALUE_ERROR,
  DISMISS_NOTIFICATION,
} from '../actions/actionTypes';

const initialState = {
  notificationMessage: '',
  notificationType: '',
  showNotification: false
};

export default function notification(
  state = initialState,
  { type, mode, payload }
) {
  switch (type) {
    case TRANSFORM_VALUE_LOAD:
      return {
        ...state,
        notificationType: 'loading',
        notificationMessage: `loading ${mode}`,
        showNotification: true,
      };
    case TRANSFORM_VALUE_SUCCESS:
      return {
        ...state,
        notificationType: 'success',
        notificationMessage: `successfully loaded ${mode}`,
        showNotification: true,
      };
    case TRANSFORM_VALUE_ERROR:
      return {
        ...state,
        notificationType: 'error',
        notificationMessage: `error loading ${mode}: ${payload.message}`,
        showNotification: true,
      };
    case DISMISS_NOTIFICATION:
      return {
        ...state,
        notificationType: '',
        notificationMessage: '',
        showNotification: false,
      };
    default:
      return state;
  }
}
