import styled from 'styled-components'

export const FormTitle = styled.h2`
  color: white;
  text-align: center;
  margin-bottom: 10%;
  letter-spacing: 0.3rem;
`

export const Container = styled.div`
  display:flex;
  position: relative;

  width: 100%;
  height:100vh;
  top: -75px;

  text-align: center;
 
  font-family: Montserrat;
  font-style: light;
  font-weight: normal;
  background: linear-gradient(#141e30, #243b55);
  background-position: top left;
  /* border: 50px solid #243b55; */
  /* border-radius: 20%; */
  justify-content: center;
  align-items: center;
  `
  
export const Form = styled.form`
  background: rgba(0,0,0,.5);
  padding-top: 1%;
  width: 35%;
  height: 50%;
  /* margin-left:33%; */
  /* margin-top:15%; */
  padding-top: 5%;


  box-shadow: 0 15px 15px #1B1B1B;
  // background: linear-gradient(#141e30, #243b55);
  background: linear-gradient(360deg, #070607 0%, #1F1E1H 100%);
`

export const Input = styled.input`
  display: block;
  border: none;
  border-bottom: 1px solid white;
  background: transparent;
  margin: 2% 3% 5% 9%;
  font-size: 16px;
  caret-color: white;
  height: 30px;
  width: 80%;
  color: white;
  
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
  padding: 1% 5% 1% 5%;
  border: 1px solid white;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  color: white;
  margin: 40px 10px 0 10px;
  font-size: 16px;

  :hover {
    background-color: #E1B486;
    color: black;
    width: 9rem;
    height: 3rem;
  }
`