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

    const logo = (
        <Logo />
    );

    const navigation = (
        <ul className="flex lg:flex-col lg:items-center">
            <ListItem href="/" id="/">
                <IconHome />
            </ListItem>
            <ListItem href="movies" id="/movies">
                <IconMovies />
            </ListItem>
            <ListItem href="tv-series" id="/tv-series">
                <IconTv />
            </ListItem>
            <ListItem href="bookmarked" id="/bookmarked">
                <IconBookmark />
            </ListItem>
        </ul>
    );

    return (
        <header className={classNames(classes.header, 
            "bg-blue-600 flex items-center justify-between p-3 lg:flex-col lg:ml-4 lg:rounded-2xl xl:ml-8 xl:py-4")}>
            <div className="hidden flex-col grow items-center lg:flex">
                <h1><Link href='/'>{ logo }</Link></h1>
                <nav className="mt-8">{ navigation }</nav>
            </div>
            <Link className="lg:hidden" href="/">{ logo }</Link>
            <nav className="lg:hidden">{ navigation }</nav>
            <div className={classNames(classes.avatar, "relative rounded-full")}>
                <Image
                    alt="user"
                    className={classNames("block h-full rounded-full w-full")}
                    layout="fill"
                    src="/images/image-avatar.png"
                />
            </div>
        </header>
    );
};

export default Header;