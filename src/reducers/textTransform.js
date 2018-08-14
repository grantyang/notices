import {
    TRANSFORM_VALUE_LOAD, 
    TRANSFORM_VALUE_SUCCESS, 
} from '../actions/actionTypes'

const initialState = {
    transformedValue: ''
}

export default function textTransform(state = initialState, { type, payload }) {
    switch (type) {
        case TRANSFORM_VALUE_LOAD:
            return { ...state, transformedValue: '' }
        case TRANSFORM_VALUE_SUCCESS:
            return { ...state, transformedValue: payload.output }
        default: return state
    }
}
