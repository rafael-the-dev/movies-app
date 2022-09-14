import classNames from "classnames"
import { Typography } from "@mui/material"

const Title = ({ children, component, className }) => (
    <h2
        className={classNames("font-bold opacity-80 text-white text-lg sm:text-xl", className)}>
        { children }
    </h2>
);

export default Title;