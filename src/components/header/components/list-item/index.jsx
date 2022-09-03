
import classNames from "classnames";

import Link from "src/components/link";

const ListItem = ({ children, href }) => (
    <li className={classNames("mr-2 last:mr-0")}>
        <Link href={href}>
            { children }
        </Link>
    </li>
);

export default ListItem;