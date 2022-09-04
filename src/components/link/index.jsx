import classNames from "classnames"

import Link from "next/link";

const LinkContainer = ({ children, className, href, onClick }) => (
    <Link href={href}>
        <a className={classNames(className)} onClick={onClick}>
            { children }
        </a>
    </Link>
);

export default LinkContainer;