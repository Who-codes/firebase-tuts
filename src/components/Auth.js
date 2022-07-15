import React, { useState } from "react";

const Auth = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form style={{ padding: "2rem" }} onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email.."
        value={data.email}
        onChange={handleChange}
        style={{ marginRight: "2rem" }}
      />
      <input
        type="password"
        name="password"
        placeholder="Password.."
        onChange={handleChange}
        value={data.password}
      />
      <button>Submit</button>
    </form>
  );
};

export default Auth;
