import React, { useState, useContext } from "react";
import {
  FormTitle,
  Container,
  Form as FormStyled,
  Input,
  SubmitBtn,
  Label,
} from "./LoginElements";

import { Context } from "../../../Context/UserContext";
import toast, { Toaster } from 'react-hot-toast';

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useContext(Context);

  const onLoginFormSubmitHandler = (e) => {
    e.preventDefault();

    fetch("/auth/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.message) throw new Error(response.message);
        const newUser = { _id: response._id, username: response.username };
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
        // toast.success(`Successfully logged in with ${user.username}`, {
        //   style: {
        //     borderRadius: '10px',
        //     background: '#333',
        //     color: `#fff`,
        //   }
        // })
        history.push("/");
      })
      .catch((err) => {
        toast.error(`${err.message}`,{
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          }
      })
      });
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Container>
      <Toaster/>
      <FormStyled onSubmit={onLoginFormSubmitHandler}>
        <FormTitle>Login</FormTitle>
        <Label htmlFor="email">Email</Label>
        <Input name="email" onChange={updateEmail} />
        <Label htmlFor="password">Password</Label>
        <Input name="password" type="password" onChange={updatePassword} />
        <SubmitBtn>SUBMIT</SubmitBtn>
      </FormStyled>
    </Container>
  );
};
export default Login;
