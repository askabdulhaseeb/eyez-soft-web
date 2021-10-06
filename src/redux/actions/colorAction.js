import { COLOR_CHANGE_REQUEST, COLOR_CHANGE_FAILURE, COLOR_CHANGE_SUCCESS } from "../types/colorTypes";

export const colorRequest = () => {
    return {
        type: COLOR_CHANGE_REQUEST
    }
}
export const colorFailure = () => {
    return {
        type: COLOR_CHANGE_FAILURE
    }
}
export const colorSuccess = (isDark) => {
    return {
        type: COLOR_CHANGE_SUCCESS,
        payload: isDark
    }
}

export const colorChange = (isDark) => {
    return async dispatch => {
        dispatch(colorRequest());
        dispatch(colorSuccess(isDark));
    }
}