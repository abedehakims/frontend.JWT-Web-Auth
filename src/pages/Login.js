import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../redux/slices/authSlice";
import { Link } from "react-router-dom";
import { authAPI } from "../services/api";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // Make new state to show the error
    const [error, setError] = useState(null);
    // Make dispatcher for hook
    const dispatcher = useDispatch();

    const handleSubmitButton = async (e) => {
        e.preventDefault();
        // Call the API
        const response = await authAPI.api_login({ email, password });

        // If the API not respond
        if (!response) {
            setError("Some error have been occured, try again later...");
            return;
        }
        console.log(response);

        // If it has another error
        if (response.error) {
            setError(response.error);
            return;
        }

        // If login authorization complete, this will convert email dan JWT's token
        const userJSON = JSON.stringify(response);

        // Call the dispatch login function from redux
        dispatcher(login(userJSON));
    };

    return (
        <div className="background-img">
            <div className="card">
                <h2>Login Mahasiswa</h2>
                <form method="post">
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        ></input>
                    </div>
                    <button onClick={handleSubmitButton} type="submit" className="submit-btn">Submit</button>
                    <p>New user? <Link to="/signup">Create an account</Link></p>
                    {/* Show the error */}
                    {error && <div className="error-message">{error}</div>}
                </form>
            </div>
        </div>
    );
}