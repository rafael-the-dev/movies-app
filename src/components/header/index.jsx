import classNames from "classnames";
import Image from "next/image"

import logo from "public/icons/logo.svg"
import classes from "./styles.module.css";

import Link from "../link";

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