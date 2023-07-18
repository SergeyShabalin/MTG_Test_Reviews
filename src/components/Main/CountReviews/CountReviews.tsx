import React, {Component} from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";

import {StateModel} from "../../../models/Reviews";
import {reviewsActions} from "../../../store/AsyncActions";

import classes from "./CountReviews.module.css"
import BtnPage from "../../BtnPage";

interface MyComponentProps {
    reviewCount: number
    changeCountReviews: (count) => number
}

const ARR_COUNT_REVIEWS = [3, 5, 10]

class CountReviews extends Component<MyComponentProps, null> {
    constructor(props: MyComponentProps) {
        super(props)
    }

    changeCountReviews = (count: number) => {
        this.props.changeCountReviews(count)
    }

    render() {
        const {reviewCount} = this.props

        return <main className={classes.count_review}>
            <span>Показать по:&nbsp;</span>
            {ARR_COUNT_REVIEWS.map(count => (
                    <BtnPage
                        key={count}
                        active={reviewCount}
                        label={count}
                        changePage={this.changeCountReviews}
                    />
                )
            )}
        </main>
    }
}

const mapStateToProps = (state: StateModel) => ({
    reviewCount: state.reviewCount,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeCountReviews: (count: number) => dispatch(reviewsActions.changeReviewCount(count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountReviews)