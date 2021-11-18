import React from "react";
import Nav from "./nav";
import Footer from "./footer";

const Layout = ({ children }) => {
    return (
        <div>
            <Nav />
            <div class="">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;