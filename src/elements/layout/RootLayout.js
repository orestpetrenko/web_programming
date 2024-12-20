import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";

export default function RootLayout(props) {
    return (
        <main>
            <Navigation />
            {props.children}
            <Outlet />
            <Footer />
        </main>
    );
}