import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Authcontext } from "./contextAPI";

export const PrivateRoute = ({ children }) => {
  // const auth = useSelector((store) => store.todo.auth);
  // console.log("hh");
  const { auth, authToggle } = useContext(Authcontext);
  const nav = useNavigate();

  if (!auth) {
    return <Navigate to="/login" />;
  }
  return children;
};
