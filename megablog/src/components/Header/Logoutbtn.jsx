import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authslice";
function Logoutbtn() {
  const dispatch = useDispatch(); // dispatch bana nay kay bad ake handler bhe banta hay
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button className="bg-red-950 hover:bg-slate-400 font-bold py-2 px-4 rounded">logout</button>
  );
}

export default Logoutbtn;
