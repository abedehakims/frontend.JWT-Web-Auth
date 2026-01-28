import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";

export default function MainHeaderLayout() {
    const dispatcher = useDispatch();

    const logoutuser = (e) => {
        e.preventDefault();
        dispatcher(logout());
        // This is will reset localstorage and reset isLogginIn to = false
        // Trigger to App() function again from isLoggedIn false
    };

    return (
        <div>
            <header>
                <div className="root-layout-header">
                    <NavLink to="/">
                        <h1>JWT Authorization Demo</h1>
                    </NavLink>
                </div>
                <nav>
                    <div>
                        <NavLink to="/item1">Services</NavLink>
                        <NavLink to="/item2">Account</NavLink>
                        <NavLink to="/item3">About</NavLink>
                        <button onClick={logoutuser}>Logout</button>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}