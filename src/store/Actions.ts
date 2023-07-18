import {
    PayloadForGetAllReview,
    REVIEW_TYPES,
} from "../models/Reviews";

export const ReviewAC = {
    getReviewIds:  (payload: string[]) => ({type: REVIEW_TYPES.GET_REVIEW_IDS, payload}),
    getAllReviewsRu: (payload: PayloadForGetAllReview ) => ({type: REVIEW_TYPES.GET_ALL_REVIEWS_RU, payload}),
    getAllReviewsEn: (payload: PayloadForGetAllReview ) => ({type: REVIEW_TYPES.GET_ALL_REVIEWS_EN, payload}),
    changeReviewCount: (payload: number) => ({type: REVIEW_TYPES.CHANGE_REVIEW_COUNT, payload}),
    changePage: (payload: number) => ({type: REVIEW_TYPES.CHANGE_PAGE, payload}),
}

