
import classNames from "classnames";
import Image from "next/image";

import IconHome from "public/icons/icon-nav-home.svg";
import IconMovies from "public/icons/icon-category-movie.svg";
import IconTv from "public/icons/icon-nav-tv-series.svg";
import IconBookmarkEmpty from "public/icons/icon-bookmark-empty.svg";
import IconBookmarkFull from "public/icons/icon-bookmark-full.svg";

import classes from "./styles.module.css";

const Card = ({ category, isBookmarked, rating, title, thumbnail, year }) => {
    const icons = {
        Movie: <IconMovies />,
        "TV Series": <IconTv className="text-white" />
    };

    return (
        <li className={classNames(classes.container, `mb-6 text-white`)}>
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
            <ul className="flex items-center mt-3 opacity-90 pl-1 text-xs">
                <li>{ year }</li>
                <li className={classNames(classes.categoryItem, "px-4 relative")}>
                    { icons[category] }
                    <span className="ml-1">{ category }</span>
                </li>
                <li>{ rating }</li>
            </ul>
            <h3 className="font-semibold mt-2 pl-1 text-base">
                { title }
            </h3>
        </li>
    );
};

export default Card;