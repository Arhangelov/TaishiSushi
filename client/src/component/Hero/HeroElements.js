import styled, { keyframes } from "styled-components";


export const HeroContainer = styled.div`
  top: 0%;
  position: relative;
  justify-content: center;
  align-items:center;
  text-align:center;
  color: #E1B486;
  
  background: rgba(0, 0, 0, 0.8);
  
  transform: translate(-50% -50%);
  /* z-index: 0; */
  `;

export const HeroImg = styled.img`
    width: 100vw;
    height:100%;
    object-fit: cover;
    
  `

const text = keyframes`
  0% {
    color:rgba(0, 0, 0, 0.6);
    margin-bottom: -16%;
  }
  30%{
    letter-spacing: .rem;
    margin-bottom: -16%;
  }
  80%{
    letter-spacing: .3rem;
    margin-bottom: -16%;
  }
`

export const WelcomeIn = styled.p`
  font-size: 3rem;
  position: absolute;
  width: 85%;
  height: 9vh;
  /* left: 7%; */
  /* margin-top: 15%;
  margin-bottom: -1%; */
  text-align:center;
  /* padding-top: 3%; */
  letter-spacing: 3px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(30px);
  animation: ${text} 3s 1;

`;

export const Name = styled.p`
  /* position:absolute; */
  font-size: 36px;
  font-style: italic;
  width: 100%;
  height: 52px;

`;
