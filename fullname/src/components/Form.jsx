import { useState } from "react";
export default function Form() {
  const [personName, setPersonName] = useState({
    firstName: "",
    lastName: "",
  });
  const { firstName, lastName } = personName;
  const handleChange = (event) => {
    switch (event.target.id) {
      case "firstName": {
        setPersonName((prevState) => {
          return { ...prevState, firstName: event.target.value };
        });
        break;
      }
      case "lastName": {
        setPersonName((prevState) => {
          return { ...prevState, lastName: event.target.value };
        });
      }
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <div
          id="inputElements"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <label htmlFor="firstName">
            <span>FirstName: </span>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="lastName">
            <span>LastName: </span>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit" style={{ maxWidth: "fit-content" }}>
          Submit
        </button>
      </form>
      {firstName.length > 0 && lastName.length > 0 ? (
        <span>Full Name: {`${firstName} ${lastName}`}</span>
      ) : null}
    </div>
  );
}
