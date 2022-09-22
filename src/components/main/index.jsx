import classNames from "classnames";

import classes from "./styles.module.css"

const Main = ({ children }) => (
    <main className={classNames(classes.main, "overflow-y-auto pt-4 xl:pl-4")}>
        { children }
    </main>
);

export default Main;