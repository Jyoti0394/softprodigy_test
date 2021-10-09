import { FETCH_IMAGES, FETCH_IMAGES_FAILURE, FETCH_IMAGES_SUCCESS } from "./constants";

export const fetchImages = (count) => {
    return{
    type: FETCH_IMAGES,
    payload: count
    }
}

export const fetchImagesSuccess = (data) => ({
    type: FETCH_IMAGES_SUCCESS,
    payload: data
})

export const fetchImagesFailure = (error) => ({
    type: FETCH_IMAGES_FAILURE,
    payload: error
})

