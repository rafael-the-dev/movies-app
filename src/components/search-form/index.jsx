import * as React from "react";
import classNames from "classnames"

import classes from "./styles.module.css"

import SearchOutlinedIcon from 'public/icons/icon-search.svg';

const Form = ({ data, setData }) => {
    const changeHandler = e => {
        const { value } = e.target;
        const result = data.filter(item => item.title.toLowerCase() === value.toLowerCase());
        setData(result);
    };

    return (
        <form className="flex items-center mb-4">
            <SearchOutlinedIcon className={classNames("text-white", classes.icon)} />
            <input 
                className="bg-transparent border-0 grow outline-none py-2 px-2 text-base text-slate-50"
                onChange={changeHandler}
                placeholder="Search for movies or"
            />
        </form>
    );
};

export default Form;