import {initialState} from "./InitState";
import {
    getAllReviewsENType,
    getAllReviewsRUType,
    getReviewIds,
    REVIEW_TYPES,
    StateModel
} from "../models/Reviews";
import {changeReviewCountType, changePageType} from '../models/Reviews'

export type  ActionTypes =
    | changeReviewCountType
    | getReviewIds
    | changePageType
    | getAllReviewsRUType
    | getAllReviewsENType

export default function messageReducer(state = initialState, action: ActionTypes): StateModel {
    switch (action.type) {

        case REVIEW_TYPES.GET_REVIEW_IDS: {
            return {...state, reviewIds: action.payload}
        }
        case REVIEW_TYPES.GET_ALL_REVIEWS_RU: {
            return {...state, allReviewsRU: action.payload, currentLanguage: 'RU'}
        }
        case REVIEW_TYPES.GET_ALL_REVIEWS_EN: {
            return {...state, allReviewsEN: action.payload, currentLanguage: 'EN'}
        }
        case REVIEW_TYPES.CHANGE_REVIEW_COUNT: {
            return {...state, reviewCount: action.payload}
        }
        case REVIEW_TYPES.CHANGE_PAGE: {
            return {...state, page: action.payload}
        }
        default:
            return state
    }
}