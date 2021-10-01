import styled from "styled-components";

export const FormTitle = styled.h2`
  color: white;
  text-align: center;
  margin-top: 20px;
`;

export const Container = styled.div`
  text-align: center;
  margin-top: 10%;
  margin-left: 40%;
  margin-bottom: 10%;

  font-family: Montserrat;
  font-style: light;
  font-weight: normal;
`;

export const Form = styled.form`
  background: #010100;
  padding-top: 1%;
  width: 25vw;
  height: 60vh;
  text-align: center;
  top: 50%;
  bottom: 50%;
  box-shadow: 0 15px 15px #1b1b1b;
  background: linear-gradient(360deg, rgba(6,7,7,1) 0%, rgba(1,1,0,0) 100%);
  /* background: linear-gradient(153deg, rgba(28,28,29,1) 0%, rgba(10,0,0,1) 100%); */
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid white;
  background: transparent;
  margin: 2% 3% 5% 9%;
  font-size: 16px;
  caret-color: white;
  height: 30px;
  width: 80%;
  color: white;
  display: block;

  &::placeholder {
    color: white;
    text-align: center;
  }
`;

export const TextArea = styled.textarea`
  border: none;
  border-bottom: 1px solid white;
  background: transparent;
  margin: 2% 3% 5% 9%;
  font-size: 16px;
  caret-color: white;
  height: 30px;
  width: 80%;
  color: white;
  display: block;

  &::placeholder {
    color: white;
    text-align: center;
  }
`

export const SubmitBtn = styled.button`
  background: transparent;
  border: 1px solid white;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  color: white;
  margin: 40px 10px 0 10px;
  padding: 1% 5% 1% 5%;
  font-size: 16px;

  :hover {
    background-color: #E1B486;
    color: black;
    width: 9rem;
    height: 3rem;
  }
`;
