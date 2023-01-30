import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
export default function Auth() {
  const key = localStorage.getItem("loggedin");
  return key ? <Outlet /> : <Navigate to={"/"} />;
}