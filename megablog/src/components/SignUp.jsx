import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Logo } from "./Index";
import { login } from "../store/authslice";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [register, handleSubmit] = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center">
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-[100px]">
                <Logo width="100%"></Logo>
            </span>
        </div>
        <Link to="/login" className="font-medium text-primary transition-all duration-200 hover:underline">
        Sigm In</Link>
        <p>
            {error }
        </p> 
        </div>
        
    </div>
  )
}

export default SignUp;
