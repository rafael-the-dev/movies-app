import { useRouter } from "next/router";
import classNames from "classnames";

import classes from "./styles.module.css"

import Link from "src/components/link";

const ListItem = ({ children, href, id }) => {
    const { pathname } = useRouter();
    
    return (
        <li className={classNames(classes.navItem, "mr-4 nav__item last:mr-0 lg:mr-0 lg:mb-3",
        { [classes.navItemSelected]: id === pathname })}>
            <Link 
                className={classNames("")}
                href={href}>
                { children }
            </Link>
            <style jsx>
                {
                    `
                        .nav__item:hover svg {
                            background: red;
                            fill: #FFF !important;
                        }
                    `
                }
            </style>
        </li>
    );
};

export default ListItem;