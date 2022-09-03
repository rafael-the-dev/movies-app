
import classNames from "classnames";

import Link from "src/components/link";

const ListItem = ({ children, href }) => (
    <li className={classNames("mr-4 last:mr-0")}>
        <Link 
            className={classNames("hover:text-white")}
            href={href}>
            { children }
        </Link>
    </li>
);

export default ListItem;