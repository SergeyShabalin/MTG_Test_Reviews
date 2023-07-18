import {StateModel} from "../models/Reviews";

export const initialState: StateModel = {
    reviewCount: 10,
    allReviewsEN: {},
    allReviewsRU: {},
    reviewIds: [],
    page: 1,
    currentLanguage: 'RU'
};