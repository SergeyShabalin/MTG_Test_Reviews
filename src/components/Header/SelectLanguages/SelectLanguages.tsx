import React, {Component} from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";

import {StateModel} from "../../../models/Reviews";
import {reviewsActions} from "../../../store/AsyncActions";
import classes from './SelectLanguages.module.css'

interface MyComponentProps {
    reviewCount: number
    getReviews: (language: string) => void
    currentLanguage: string
}


class SelectLanguages extends Component<MyComponentProps, null> {
    constructor(props: MyComponentProps) {
        super(props);
    }

    handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value) {
            this.props.getReviews(e.target.value)
        }
    }

    render() {
        return (
            <div className={classes.select_container}>
                <p>Выберите язык:</p>
                <select
                    className={classes.select_input}
                    value={this.props.currentLanguage}
                    onChange={this.handleChange}
                >
                    <option value="RU">RU</option>
                    <option value="EN">EN</option>
                </select>
            </div>
        )
    }
}

const mapStateToProps = (state: StateModel) => ({
    reviewCount: state.reviewCount,
    currentLanguage: state.currentLanguage,
    page: state.page,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getReviews: (language: string) => dispatch(reviewsActions.getReviews(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectLanguages)