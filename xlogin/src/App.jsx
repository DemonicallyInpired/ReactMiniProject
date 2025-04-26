import { useState } from "react";
const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [authenticated, setAuthenticated] = useState(false);
  const handleChange = (event) => {
    const id = event.target.id;
    switch (id) {
      case "username": {
        setUsername(event.target.value);
        break;
      }
      case "password": {
        setPassword(event.target.value);
        break;
      }
      default: {
        throw new Error(`invalid reference to the input element with id ${id}`);
      }
    }
  };
  const handleSumit = (event) => {
    event.preventDefault();
    const errors = { username: "", password: "" };

    if (username !== "user") {
      errors.username = "invalid username";
    }
    if (password != "password") {
      errors.password = "invalid password";
    }
    setAuthenticated(errors.username === "" && errors.password === "");
    setErrors(errors);
  };
  return (
    <div>
      <h1>Login Page</h1>
      {!authenticated ? (
        <form onSubmit={handleSumit}>
          <label htmlFor="username" style={{ display: "block" }}>
            Username:
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handleChange}
            placeholder="username"
            required
          />

          <label htmlFor="password" style={{ display: "block" }}>
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
            placeholder="password"
            required
          />
          {(errors.username || errors.password) && (
            <span>Invalid username or password</span>
          )}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Welcome, user!</p>
        </div>
      )}
    </div>
  );
};
export default App;
