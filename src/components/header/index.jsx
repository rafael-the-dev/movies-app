import classNames from "classnames";

import classes from "./styles.module.css"

const Header = () => {

    return (
        <header className={classNames("px-3")}>
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