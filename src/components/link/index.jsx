import Link from "next/link"


const LinkContainer = ({ children, href, onClick }) => (
    <Link href={href}>
        <a onClick={onClick}>
            { children }
        </a>
    </Link>
);

export default LinkContainer;