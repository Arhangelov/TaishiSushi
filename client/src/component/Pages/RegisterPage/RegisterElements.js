import styled from 'styled-components'

export const FormTitle = styled.h2`
  color: white;
  text-align: center;
  margin-bottom: 60px;
  letter-spacing: 0.3rem;
`

export const Container = styled.div`
  text-align: center;
  margin-top: 10%;
  margin-left: 40%;


  font-family: Montserrat;
  font-style: light;
  font-weight: normal;
  `
  
  export const Form = styled.form`
  background: rgba(0,0,0,.5);
  padding-top: 1%;
  width: 400px;
  height: 550px;
  text-align: center;
  top: 50%;
  box-shadow: 0 15px 15px #1B1B1B;
  background: linear-gradient(360deg, #070607 0%, #1F1E1H 100%);
`

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
`
export const Label = styled.label`
  text-align: center;
  color: white;
  
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
`