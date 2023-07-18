import React, {Component} from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";

import {reviewsActions} from "../../../store/AsyncActions";
import {AllReviews, Reviews, StateModel} from "../../../models/Reviews";
import BtnPage from "../../BtnPage";

import classes from "./Pagination.module.css";

interface MyComponentProps {
    reviewCount: number
    page: number
    changePage: (number) => number
    allReviewsEN: AllReviews,
    allReviewsRU: AllReviews,
    currentLanguage: string,
}

const ADJACENT_PAGES = 1
const CURRENT_LANGUAGE = 'RU'

class Pagination extends Component<MyComponentProps, null> {
    constructor(props: MyComponentProps) {
        super(props)
    }

    changePage = (page: number) => {
        this.props.changePage(page)
    }

    componentDidUpdate(prevProps: Readonly<MyComponentProps>) {
        if (prevProps.reviewCount !== this.props.reviewCount) {
            this.props.changePage(1)
        }
    }

    calculatePages = () => {
        const {currentLanguage,allReviewsRU, allReviewsEN } = this.props

        let reviewsLength: number;
        if (currentLanguage === CURRENT_LANGUAGE) {
            reviewsLength = Object.keys(allReviewsRU).length;
        } else {
            reviewsLength = Object.keys(allReviewsEN).length;
        }

        const pageCount = Math.ceil(reviewsLength / this.props.reviewCount)
        const {page} = this.props
        const pages = []

        const startPage = Math.max(page - ADJACENT_PAGES, 1)
        const endPage = Math.min(page + ADJACENT_PAGES, pageCount)

        if (startPage > 1) pages.push(1)
        if (startPage > 2) pages.push('...')

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i)
        }

        if (endPage < pageCount) {
            if (endPage !== pageCount - 1) pages.push('...')
            pages.push(pageCount)
        }

        return pages
    }

    render() {
        const {page} = this.props
        const pages = this.calculatePages()

        const disabledFirst = page === 1
        const disabledLast = page === pages[pages.length - 1]

        return (
            <main className={classes.pages}>
                <span>Страница:&nbsp;</span>
                <BtnPage
                    label='<<'
                    disabled={disabledFirst}
                    prev
                    active={page}
                    changePage={() => this.changePage(page - 1)}
                />
                {pages.map((pageItem, index) => {
                    if (typeof pageItem === "string") {
                        return <span key={`${pageItem}-${index}`}>&nbsp;{pageItem}&nbsp;</span>
                    } else {
                        return <BtnPage
                            key={pageItem}
                            active={page}
                            label={pageItem}
                            changePage={this.changePage}
                        />
                    }
                })}
                <BtnPage
                    label='>>'
                    disabled={disabledLast}
                    next
                    active={page}
                    changePage={() => this.changePage(page + 1)}
                />
            </main>
        )
    }
}


const mapStateToProps = (state: StateModel) => ({
    allReviewsEN: state.allReviewsEN,
    allReviewsRU: state.allReviewsRU,
    currentLanguage: state.currentLanguage,
    reviewCount: state.reviewCount,
    page: state.page,
});

const mapDispatchToProps = (dispatch: Dispatch<Reviews>) => ({
    changePage: (count: number) => dispatch(reviewsActions.changePage(count))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
