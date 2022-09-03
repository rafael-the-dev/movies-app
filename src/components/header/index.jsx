import classNames from "classnames";
import Image from "next/image"

import Logo from "public/icons/logo.svg";
import IconBookmark from "public/icons/icon-nav-bookmark.svg";
import IconHome from "public/icons/icon-nav-home.svg";
import IconMovies from "public/icons/icon-nav-movies.svg";
import IconTv from "public/icons/icon-nav-tv-series.svg";

import classes from "./styles.module.css";

import Link from "../link";
import ListItem from "./components/list-item";

const Header = () => {

    return (
        <header className={classNames("bg-blue-700 flex items-center justify-between p-3")}>
            <Link href="/">
                <Logo />
            </Link>
            <nav>
                <ul className="flex ">
                    <ListItem href="/">
                        <IconHome className={classNames("hover:text-white")} />
                    </ListItem>
                    <ListItem href="/">
                        <IconMovies />
                    </ListItem>
                    <ListItem href="/">
                        <IconTv />
                    </ListItem>
                    <ListItem href="/">
                        <IconBookmark />
                    </ListItem>
                </ul>
            </nav>
            <div className={classNames(classes.avatar, "rounded-full")}>
                <img
                    alt="user"
                    className={classNames("block h-full rounded-full w-full")}
                    src="/images/image-avatar.png"
                />
            </div>
        </header>
    );
};

export default Header;