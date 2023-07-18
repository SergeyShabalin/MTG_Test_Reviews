import React from 'react';
import {Review} from "../../../models/Reviews";
import classes from './Review.module.css'


const UserReview = ({name, review, date}: Review) => {
    const avatarLetter = name.trim()[0]

    return (
        <div className={classes.review}>
           <section className={classes.user}>
               <div className={classes.avatar}>{avatarLetter}</div>
               <div className={classes.review_username}>{name}</div>
           </section>
            <div className={classes.review_content}>{review}</div>
            <div className={classes.review_date}>{date}</div>
        </div>
    );
};

export default UserReview;