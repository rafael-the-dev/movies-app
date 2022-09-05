
import Image from "next/image";
import classNames from "classnames";

import classes from "./styles.module.css";

const TrendingCard = ({ category, isBookmarked, rating, title, thumbnail, year }) => {

    return (
        <li className={classNames(classes.container, 'absolute h-full ')}>
            <div className={classNames(classes.imageContainer, `h-full w-full`)}>
                <Image 
                    alt={title}
                    layout="fill"
                    src={thumbnail.trending.small}
                />
            </div>
        </li>
    );
};

export default TrendingCard;