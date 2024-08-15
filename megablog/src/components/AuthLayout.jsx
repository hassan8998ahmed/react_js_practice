import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ childern, autheticaton = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    //Todo: make it more easy to understand

    //let authValue = authStatus === true ? true : false;

    if (autheticaton && authStatus !== autheticaton) {
      navigate("/login");
    } else if (!autheticaton && authStatus !== autheticaton) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, autheticaton]);

  return loader ? <h1>Loading...</h1> : <>{childern}</>;
}
