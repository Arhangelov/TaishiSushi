import { useContext, useState } from "react";
import { Redirect } from "react-router";
import { Context } from "../../../Context/UserContext";
import {
  FormTitle,
  Container,
  Form as FormStyled,
  Input,
  SubmitBtn,
  Label,
} from "./RegisterElements";

const Register = ({ history }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [user, setUser] = useContext(Context);

  const onRegisterSubmitHandler = (e) => {
    e.preventDefault();

    
    fetch("/auth/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, password, address }),
    })
    .then((res) => res.json())
    .then((response) => {
      if (response.message) throw new Error(response.message);
      setUser({ _id: response._id, username: response.username });
      history.push("/");
    }).catch(err => console.log(err.message));

    if(user.username) <Redirect to='/' /> 
  };

  return (
    <Container>
      <FormStyled onSubmit={onRegisterSubmitHandler}>
        <FormTitle>Register</FormTitle>
        <Label htmlFor="email">Email</Label>
        <Input name="email" onChange={(e) => setEmail(e.target.value.trim())} />
        <Label htmlFor="username">Username</Label>
        <Input
          name="username"
          onChange={(e) => setUsername(e.target.value.trim())}
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value.trim())}
        />
        <Label htmlFor="address">Address</Label>
        <Input
          name="address"
          onChange={(e) => setAddress(e.target.value.trim())}
        />
        <SubmitBtn>SUBMIT</SubmitBtn>
      </FormStyled>
    </Container>
  );
};
export default Register;
