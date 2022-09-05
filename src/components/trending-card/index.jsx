
import Image from "next/image";
import classNames from "classnames";

import IconMovies from "public/icons/icon-category-movie.svg";
import IconTv from "public/icons/icon-category-tv-series.svg";
import IconBookmarkEmpty from "public/icons/icon-bookmark-empty.svg";
import IconBookmarkFull from "public/icons/icon-bookmark-full.svg";

import classes from "./styles.module.css";

const TrendingCard = ({ category, isBookmarked, rating, title, thumbnail, year }) => {
    const icons = {
        Movie: <IconMovies />,
        "TV Series": <IconTv className="text-white" />
    };

    return (
        <li className={classNames(classes.container, 'absolute h-full ')}>
            <div className={classNames(classes.imageContainer, `h-full relative w-full`)}>
                <Image 
                    alt={title}
                    layout="fill"
                    src={thumbnail.trending.small}
                />
                <button className={classNames(classes.button, 
                    'absolute border-0 flex items-center justify-center outline-none rounded-full')}>
                    { isBookmarked ? <IconBookmarkFull /> : <IconBookmarkEmpty /> }
                </button>
                <div className={classNames(classes.content, `absolute flex items-center justify-between px-4 py-2 
                    text-white w-full`)}>
                    <div>
                        <ul className="flex items-center mt-3 opacity-90 pl-1 text-xs">
                            <li>{ year }</li>
                            <li className={classNames(classes.categoryItem, "px-4 relative")}>
                                { icons[category] }
                                <span className="ml-1">{ category }</span>
                            </li>
                        </ul>
                        <h3 className="font-semibold mt-2 pl-1 text-base">
                            { title }
                        </h3>
                    </div>
                    <h4 className={classNames(classes.rating)}>
                        { rating }
                    </h4>
                </div>
            </div>
        </li>
    );
};

export default TrendingCard;