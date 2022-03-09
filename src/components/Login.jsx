import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { islogged, setlogged } = useContext(AuthContext);
  const loginHandler = () => {
    if (!islogged) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          setlogged(!islogged);
          loginHandler();
        }}
      >
        Login
      </button>
    </div>
  );
}
