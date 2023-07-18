import React, {Component} from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";

import Header from "../Header";
import Pagination from "./Pagination";
import CountReviews from "./CountReviews";
import {AllReviews, Review, Reviews, StateModel} from "../../models/Reviews";
import UserReview from "./Review";
import {ActionTypes} from "../../store/Reducer";
import {reviewsActions} from "../../store/AsyncActions";

import classes from './App.module.css'

interface MyComponentProps {
    getReviews: (language: string) => void
    reviews: Review[]
    allReviewsRU: AllReviews,
    allReviewsEN:  AllReviews,
    reviewIds: string[],
    currentLanguage: string,
}

const DEFAULT_LANGUAGE = 'RU'

class App extends Component<MyComponentProps, null> {

    constructor(props: MyComponentProps) {
        super(props);
    }

    componentDidMount() {
        this.props.getReviews(DEFAULT_LANGUAGE)
    }

    render() {
        const {currentLanguage, allReviewsRU, allReviewsEN, reviewIds} = this.props

        let allReviews: AllReviews
        if (currentLanguage === 'RU') {
            allReviews = allReviewsRU
        }
        else allReviews = allReviewsEN

        const selectedReviews = reviewIds.map(id => ({...allReviews[id], id}))

        return (
            <main>
                <Header/>
                <section className={classes.control_pages}>
                    <Pagination/>
                    <CountReviews/>
                </section>
                <hr/>
                <div className={classes.reviews}>
                    {selectedReviews?.map((item: Review) => <div key={item.id}><UserReview {...item}/></div>)}
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state: StateModel) => ({
    allReviewsRU: state.allReviewsRU,
    allReviewsEN: state.allReviewsEN,
    reviewIds: state.reviewIds,
    currentLanguage: state.currentLanguage,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => ({
    getReviews: (language: string) => dispatch(reviewsActions.getReviews(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
