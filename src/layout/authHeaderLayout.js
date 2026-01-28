import { NavLink, Outlet } from "react-router-dom";

export default function AuthHeaderLayout() {
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
                    </div>
                </nav>
            </header>
            <main>
                {/* Just leave this for now */}
                <Outlet />
            </main>
        </div>
    );
}