import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const MainLayout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <header>
                <nav className="mt-4">
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className="mt-4">
                <Outlet></Outlet>
            </main>
            <footer className="mb-4">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;