import React from "react";
import { useAuth } from "../../contexts/auth";

const Home: React.FC = () => {
  const context = useAuth();

  console.log(context);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
