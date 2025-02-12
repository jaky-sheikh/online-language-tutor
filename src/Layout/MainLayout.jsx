import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <header>
                <nav>

                </nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default MainLayout;