import {Action} from 'redux'

import ReviewsApi from '../api/Reviews'
import {AllReviews, StateModel} from "../models/Reviews";
import {ReviewAC} from "./Actions";

import {ThunkAction} from 'redux-thunk';
import {AppDispatch} from "./index";

const getSelectedReviews = (allReviews: AllReviews, reviewCount: number, page: number) => {
    const startIndex = (page - 1) * reviewCount
    const reviewIds = Object.keys(allReviews).slice(startIndex, startIndex + reviewCount)
    return reviewIds
};

export const reviewsActions = {
    changeArrReviews: (): ThunkAction<void, StateModel, unknown, Action> => (dispatch: AppDispatch, getState: () => StateModel) => {
        const {allReviewsRU, currentLanguage, allReviewsEN, page, reviewCount} = getState()

        let reviewIds
        if (currentLanguage === 'RU') {
            reviewIds = getSelectedReviews(allReviewsRU, reviewCount, page)
        } else {
            reviewIds = getSelectedReviews(allReviewsEN, reviewCount, page)
        }
        dispatch(ReviewAC.getReviewIds(reviewIds))
    },

    getReviews: (language: string) => async (dispatch: AppDispatch) => {
        try {
            let res
            if (language === 'RU') {
                res = await ReviewsApi.getReviewsRu()
                dispatch(ReviewAC.getAllReviewsRu(res.data))
            } else {
                res = await ReviewsApi.getReviewsEn()
                dispatch(ReviewAC.getAllReviewsEn(res.data))
            }
            dispatch(reviewsActions.changeArrReviews())
        } catch (error) {
            console.log(error)
        }
    },

    changeReviewCount: (count: number) => (dispatch: AppDispatch) => {
        try {
            dispatch(ReviewAC.changeReviewCount(count))
            dispatch(reviewsActions.changePage(1))
        } catch (error) {
            console.log(error)
        }
    },

    changePage: (page: number) => (dispatch: AppDispatch, getState: () => StateModel) => {
        try {
            const {allReviewsRU, allReviewsEN, currentLanguage, reviewCount} = getState()
            let reviewIds

            if (currentLanguage === 'RU') {
                reviewIds = getSelectedReviews(allReviewsRU, reviewCount, page)
            } else {
                reviewIds = getSelectedReviews(allReviewsEN, reviewCount, page)
            }
            getSelectedReviews(allReviewsRU, reviewCount, page)
            dispatch(ReviewAC.getReviewIds(reviewIds))
            dispatch(ReviewAC.changePage(page))
        } catch (error) {
            console.log(error)
        }
    },
}