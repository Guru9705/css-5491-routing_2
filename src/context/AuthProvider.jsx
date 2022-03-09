import React, { useState, createContext } from "react";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [islogged, setlogged] = useState(false);

  return (
    <AuthContext.Provider value={{ islogged, setlogged }}>
      {children}
    </AuthContext.Provider>
  );
}
