import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../redux/slices/authSlice";
import { Link } from "react-router-dom";
import { authAPI } from "../services/api";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
    const [error, setError] = useState(null);
    const dispatcher = useDispatch();

    const handleSubmitButton = async (e) => {
        e.preventDefault();
        // Local check
        if (password !== retypePassword) {
            setError("Password did not match");
            return;
        }
        // Call API
        const response = await authAPI.api_signup({ email, password });

        // Error handling
        if (!response) {
            setError("Some error have been occured, try again later");
            return;
        }
        if (response.error) {
            setError(response.error);
            return;
        }

        const userJSON = JSON.stringify(response);
        // Start login if account user was successfully made
        dispatcher(login(userJSON));
    };

    return (
        <div className="background-img">
            <div className="card">
                <h2>Create Account</h2>
                <form method="post">
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            onChange={(e) => setRetypePassword(e.target.value)}
                            value={retypePassword}
                            required
                        ></input>
                    </div>
                    <button onClick={handleSubmitButton} type="submit" className="submit-btn">Submit</button>
                    <p>Already have a account? <Link to="/">Login</Link></p>
                    {/* Show the error */}
                    {error && <div className="error-message">{error}</div>}
                </form>
            </div>
        </div>
    );
}