/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable default-case */
import {
    CREATE,
} from '../constants/actionTypes'

export default (resume = {}, action) => {
    switch (action.type) {
        case CREATE:
            return action.payload;
        default:
            return resume;
    }
};