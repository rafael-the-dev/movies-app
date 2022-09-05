import Header from "../header";

const Layout = ({ children }) => {
    return (
        <div className="bg-blue-700 lg:flex lg:h-screen lg:py-4">
            <Header />
            { children }
        </div>
    );
};

export default Layout;