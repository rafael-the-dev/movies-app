
import classNames from "classnames";
import Image from "next/image";

import IconHome from "public/icons/icon-nav-home.svg";
import IconMovies from "public/icons/icon-nav-movies.svg";
import IconTv from "public/icons/icon-nav-tv-series.svg";
import IconBookmarkEmpty from "public/icons/icon-bookmark-empty.svg";
import IconBookmarkFull from "public/icons/icon-bookmark-full.svg";

import classes from "./styles.module.css";

const Card = ({ isBookmarked, title, thumbnail }) => {

    return (
        <li className={classNames(classes.container, `mb-3 text-white`)}>
            <div className={classNames(classes.imageContainer, `relative`)}>
                <Image 
                    layout="fill"
                    src={thumbnail.regular.small}
                />
                <button className={classNames(classes.button, 
                    'absolute border-0 flex items-center justify-center outline-none rounded-full')}>
                    { isBookmarked ? <IconBookmarkFull /> : <IconBookmarkEmpty /> }
                </button>
            </div>
            <h3 className="font-bold mt-2">
                { title }
            </h3>
        </li>
    );
};

export default Card;