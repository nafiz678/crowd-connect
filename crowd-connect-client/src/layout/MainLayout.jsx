import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const MainLayout = () => {
    const { dark } = useContext(authContext)



    return (
        <div className=" " data-theme={`${dark ? "dark" : "light"}`} >

            {/* navbar section */}
            <header className="bg-base-300  ">
                {/* <nav className="md:w-11/12 md:mx-auto fixed z-10 "> */}
                    <Navbar></Navbar>
                {/* </nav> */}
            </header>
            {/* Dynamic section */}
            <div className="min-h-[calc(100vh-450px)] pt-20">
                <Outlet></Outlet>
            </div>
            {/* footer section */}
            <Footer></Footer>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default MainLayout;