import { FETCH_IMAGES, FETCH_IMAGES_FAILURE, FETCH_IMAGES_SUCCESS } from "./constants";

const initialState = {
    isProgress: false,
    isSuccess: false,
    isFailed: false,
    response:[]
};

export default function Reducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_IMAGES:
            return {
                ...state,
                isProgress: true
            }
        case FETCH_IMAGES_SUCCESS:
            return {
                ...state,
                isSuccess: true,
                response: action.payload,
                isProgress: false
            }
        case FETCH_IMAGES_FAILURE:
            return {
                ...state,
                isFailed: true,
                isSuccess:false,
                response:[],
                isProgress: false
            }
        default:
            return state;
    }
}