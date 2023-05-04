import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>Home</h2>
      {user && <h2>{user.displayName}</h2>}
    </div>
  );
};

export default Home;
