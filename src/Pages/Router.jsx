import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import Settings from "../components/Settings";

import React from "react";

export default function Router() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="dashboard/settings" element={<Dashboard />} />
    </Routes>
  );
}
