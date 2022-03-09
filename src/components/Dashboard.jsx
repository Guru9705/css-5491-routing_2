import React, { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { islogged } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (islogged === false) {
      navigate("/");
    }
  });

  return <div>Welcome to Dashboard</div>;
}
