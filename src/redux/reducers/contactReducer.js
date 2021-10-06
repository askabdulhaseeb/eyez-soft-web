import { CONTACT_CHANGE_REQUEST, CONTACT_CHANGE_FAILURE, CONTACT_CHANGE_SUCCESS } from "../types/contactTypes";

const initialState = {
    isContact: false,
};
const ContactReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONTACT_CHANGE_REQUEST:
            return {
                ...state,
                isFail: false,
            }
        case CONTACT_CHANGE_FAILURE:
            return{
                ...state,
                isFail: true,
            }
        case CONTACT_CHANGE_SUCCESS:
            return{
                ...state,
                isContact:action.payload
            }
        default: return state;
    }
}
export default ContactReducer;