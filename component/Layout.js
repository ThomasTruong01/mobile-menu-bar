import Menu from "./menu-bar/Menu";


const Layout = ({ children }) => {
    return (
        <>
            <Menu />
            <div>{children}</div>
        </>
    )
};

export default Layout;