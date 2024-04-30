import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Basic = () => {
    return (
        <>
            <StrictMode>
            <div className="container-fluid bg-dark p-0">
                <Header />

                <div className="container">
                    <div className="row">
                        <Outlet></Outlet>
                    </div>
                </div>

                <Footer />
                
            </div>
            </StrictMode>
        </>
    );
}

export default Basic;