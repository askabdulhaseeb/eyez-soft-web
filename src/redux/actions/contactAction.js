import { CONTACT_CHANGE_REQUEST, CONTACT_CHANGE_FAILURE, CONTACT_CHANGE_SUCCESS } from "../types/contactTypes";

export const contactRequest = () => {
    return {
        type: CONTACT_CHANGE_REQUEST
    }
}
export const contactFailure = () => {
    return {
        type: CONTACT_CHANGE_FAILURE
    }
}
export const contactSuccess = (isContact) => {
    return {
        type: CONTACT_CHANGE_SUCCESS,
        payload: isContact
    }
}

export const contactChange = (isContact) => {
    return async dispatch => {
        dispatch(contactRequest());
        dispatch(contactSuccess(isContact));
    }
}