import { combineReducers } from 'redux';

import textTransform from '../reducers/textTransform'
import notification from '../reducers/notification'

export default combineReducers({
    textTransform,
    notification
})