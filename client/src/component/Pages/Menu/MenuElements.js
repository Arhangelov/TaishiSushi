import styled from "styled-components";
import { Link } from 'react-router-dom';

import FutoImg from "../../../resources/Futo-Salmon-and-Asparages.jpg";
import HosoImg from "../../../resources/Hosomaki-Tuna-and-Mango.jpg";
import NigiriImg from "../../../resources/Nigiri-Bass.jpg";
import UramakiImg from "../../../resources/Uramaki-Kabayaki.jpg";
import SashimiImg from "../../../resources/Sashimi-Bass.jpg";
import SetImg from "../../../resources/Qmabushi-Set.jpg";

export const LinkTo = styled(Link)`
  text-decoration: none;
  display:block;
  font-style: italic;
  font-weight: 500;
  margin-top: 20%;
  font-size: 2em;
  color: white;
`

export const P = styled.p`

`;

export const Background = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  padding-top: 60px;
  background: linear-gradient(
      0deg,
      rgba(125, 56, 87, 1) 0%,
      rgba(255, 126, 58, 1) 100%
    )
    no-repeat top right;
  @media only screen and (max-width: 580px) {
    padding-top: 130px;
  }

  @media only screen and (max-width: 636px) {
    height: auto;
  }

`

export const Container = styled.div`
  display: grid;
  gap: 1em;
  
  padding-top: 6em;
  padding-left: 3em; 
  width: 100vw;
  height:100vh;
  grid-template-columns: 30% 30% 30%;
  grid-auto-rows: minmax(230px, 260px);
  justify-content: start;
  align-items: center;
  text-align: center;
  cursor: pointer;
  background: linear-gradient(0deg, rgba(125,56,87,1) 0%, rgba(255,126,58,1) 100%);
  /* padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center; */
`;

export const CardType1 = styled.div`
  background: url(${FutoImg});
  background-position: 25% 55%;
  border-radius: 20px;
  height: 100%;
`;

export const CardType2 = styled.div`
  background: url(${HosoImg});
  background-position: 25% 45%;
  border-radius: 20px;
  height: 100%;
`;

export const CardType3 = styled.div`
  background: url(${NigiriImg});
  background-position: 33% 55%;
  border-radius: 20px;
  height: 100%;
`;

export const CardType4 = styled.div`
  background: url(${UramakiImg});
  background-position: 25% 55%;
  border-radius: 20px;
  height: 100%;
`;

export const CardType5 = styled.div`
  background: url(${SashimiImg});
  background-position: 30% 55%;
  border-radius: 20px;
  height: 100%;
`;

export const CardType6 = styled.div`
  background: url(${SetImg});
  background-position: 30% 55%;
  border-radius: 20px;
  height: 100%;
`;
