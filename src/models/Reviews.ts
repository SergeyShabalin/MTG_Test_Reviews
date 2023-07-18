
export enum REVIEW_TYPES {
    GET_REVIEW_IDS = 'GET_REVIEW_IDS',
    GET_ALL_REVIEWS_RU = 'GET_ALL_REVIEWS_RU',
    GET_ALL_REVIEWS_EN = 'GET_ALL_REVIEWS_EN',
    CHANGE_REVIEW_COUNT = 'CHANGE_REVIEW_COUNT',
    CHANGE_PAGE = 'CHANGE_PAGE'
}

export type AllReviews = { [key: string]: Review }

export type PayloadForGetAllReview = {
    [key: string]: ReviewInAll;
};

export interface ReviewInAll {
    name: string;
    review: string;
    date: string;
}

export interface Reviews {
    Reviews: AllReviews
}

export interface Review extends ReviewInAll{
    id: string;
}

export interface StateModel {
    reviewCount: number;
    currentLanguage: string
    allReviewsEN: AllReviews;
    allReviewsRU: AllReviews;
    reviewIds: string[];
    page: number;
}

export type getAllReviewsRUType = {type: REVIEW_TYPES.GET_ALL_REVIEWS_RU, payload: AllReviews }
export type getAllReviewsENType = {type: REVIEW_TYPES.GET_ALL_REVIEWS_EN, payload: AllReviews }
export type getReviewIds = {type: REVIEW_TYPES.GET_REVIEW_IDS, payload: string[]}
export type changeReviewCountType = {type: REVIEW_TYPES.CHANGE_REVIEW_COUNT, payload: number}
export type changePageType = {type: REVIEW_TYPES.CHANGE_PAGE, payload: number}