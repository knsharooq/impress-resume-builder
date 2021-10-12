import { CREATE } from '../constants/actionTypes';

export const createResume = (resume) => (dispatch) => {
    try {
        dispatch({ type: CREATE, payload: resume })
    } catch (error) {
        console.log(error.message)
    }
}
