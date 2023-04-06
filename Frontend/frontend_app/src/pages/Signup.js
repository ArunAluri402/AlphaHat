import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../util/ApiUtils";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const nav = useNavigate();
  const handleSignup = (event) => {
    event.preventDefault();

    setLoading(true);

    const signupRequest = {
      username: username,
      name: name,
      email: email,
      password: password,
    };

    signup(signupRequest)
      .then(() => {
        setLoading(false);
        setError(null);
        setSuccess(true);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
        setSuccess(false);
      });

    setTimeout(() => {
      nav("/");
    }, 1500);
  };

  return (
    <div className="Login_page">
      <div className="container2">
        <div>
          <img alt="Logo" className="Logo" src="./Asset5.png" />
        </div>
        <h2>Signup</h2>
        {error && <p>{error}</p>}
        {success && <p>Signup successful!</p>}
        <form className="Login_Form" onSubmit={handleSignup}>
          <input
            className="ip"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder=" Username"
            required
          />

          <input
            className="ip"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder=" Name"
            required
          />

          <input
            className="ip"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder=" Email"
            required
          />

          <input
            className="ip"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            required
          />

          <button className="Login_button" type="submit" disabled={loading}>
            {loading ? "Loading..." : "Signup"}
          </button>

          <div>
            <h6>
              Already have an account? <Link to="/">Login </Link>Here
            </h6>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
