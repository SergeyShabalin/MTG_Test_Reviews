import { Api } from './index'
import { AxiosResponse } from 'axios'
import {Reviews} from "../models/Reviews";

class ReviewsApi {
    async getReviewsRu(): Promise<AxiosResponse<Reviews>> {
        return Api.get('/ru'   )
    }
    async getReviewsEn(): Promise<AxiosResponse<Reviews>> {
        return Api.get('/en')
    }
}


export default new ReviewsApi()