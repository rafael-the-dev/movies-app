import Header from "../header";

const Layout = ({ children }) => {
    return (
        <div className="lg:flex lg:h-screen lg:p-4">
            <Header />
            { children }
        </div>
    );
};

export default Layout;