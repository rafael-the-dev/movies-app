import classNames from "classnames";
import Image from "next/image"

import logo from "public/icons/logo.svg";
import IconHome from "public/icons/icon-nav-home.svg";
import classes from "./styles.module.css";

import Link from "../link";
import ListItem from "./components/list-item";
console.log(IconHome)
const Header = () => {

    return (
        <header className={classNames("bg-blue-700 flex items-center justify-between p-3")}>
            <Link href="/">
                <Image
                    alt="logo"
                    className={classNames("")}
                    src={logo}
                />
            </Link>
            <nav>
                <ul>
                    <ListItem href="/">
                        <IconHome />
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