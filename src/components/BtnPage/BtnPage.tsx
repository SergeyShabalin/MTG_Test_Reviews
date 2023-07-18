import React from 'react';
import classes from "./BtnPage.module.css"

interface BtnPageProps {
    label: number
    changePage: (page: number) => void
    active: number
    disabled?: boolean
}

function BtnPage({label, changePage, active, disabled}: BtnPageProps) {

    function setPage() {
        changePage(label)
    }

    return (
        <button
            className={`${active === label ? classes.selected : classes.btn_page} ${disabled ? classes.disabled : ''}`}
            key={label}
            onClick={setPage}
            disabled={disabled}
        >
            {label}
        </button>
    )
}

export default BtnPage;