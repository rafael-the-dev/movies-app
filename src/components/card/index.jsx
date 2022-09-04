
import classNames from "classnames";
import Image from "next/image";

import IconHome from "public/icons/icon-nav-home.svg";
import IconMovies from "public/icons/icon-nav-movies.svg";
import IconTv from "public/icons/icon-nav-tv-series.svg";

import classes from "./styles.module.css";

const Card = ({ thumbnail }) => {

    return (
        <li className={classNames(classes.container, `mb-3`)}>
            <div className={classNames(classes.imageContainer, `relative`)}>
                <Image 
                    layout="fill"
                    src={thumbnail.regular.small}
                />
            </div>
        </li>
    );
};

export default Card;