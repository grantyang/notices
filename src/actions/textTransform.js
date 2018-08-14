import axios from 'axios'

import {
  TRANSFORM_VALUE_LOAD, 
  TRANSFORM_VALUE_SUCCESS, 
  TRANSFORM_VALUE_ERROR,
  DISMISS_NOTIFICATION,
} from '../actions/actionTypes'

const LOWERCASE_ENDPOINT = '/api/lowercase'
const UPPERCASE_ENDPOINT = '/api/uppercase'

const UPPERCASE = 'uppercase'
const LOWERCASE = 'lowercase'

const transformText = (input, mode = LOWERCASE) => dispatch => {
    mode = mode.toLowerCase()
    const endpoint = mode === UPPERCASE ? UPPERCASE_ENDPOINT : LOWERCASE_ENDPOINT

    dispatch({ type: TRANSFORM_VALUE_LOAD, mode })
    axios.post(endpoint, { input })
        .then(res => dispatch({ type: TRANSFORM_VALUE_SUCCESS, payload: res.data, mode }))
        .catch(err => dispatch({ type: TRANSFORM_VALUE_ERROR, payload: err, mode }))
        .then(() => setTimeout(()=>{ dispatch({ type: DISMISS_NOTIFICATION}) }, 1500))
}


export const transformToLowerCase = input => transformText(input)
export const transformToUpperCase = input => transformText(input, UPPERCASE)
