import React from 'react';
import classes from './Header.module.css'
import Clock from "./Clock";
import SelectLanguages from "./SelectLanguages";

const IMAGE_URL = 'https://res.cloudinary.com/dpctxajop/image/upload/v1688798703/vote-metaphor-conceptual-d-image-41137047_3_jltbut.jpg'

const Header = () => (
    <div className={classes.container}>
        <div className={classes.clock}> Текущее время: <Clock/></div>
        <img className={classes.image} src={IMAGE_URL}/>
        <SelectLanguages/>
    </div>
)

export default Header;