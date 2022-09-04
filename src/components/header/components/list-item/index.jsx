
import classNames from "classnames";

import Link from "src/components/link";

const ListItem = ({ children, href }) => (
    <li className={classNames("mr-4 nav__item last:mr-0 lg:mr-0 lg:mb-3")}>
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

export default ListItem;