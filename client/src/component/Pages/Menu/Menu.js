

import {
  Background,
  Container,
  CardType1,
  CardType2,
  CardType3,
  CardType4,
  CardType5,
  CardType6,
  LinkTo
} from "./MenuElements";

export const Menu = () => {

     

  return (
    <Background>
      <Container>
          <CardType6>
              <LinkTo to='/menu/sets'>Set</LinkTo>    
          </CardType6>
    
        <CardType1>
          <LinkTo to='/menu/futomaki'>Futomaki</LinkTo>
        </CardType1>
    
        <CardType2>
          <LinkTo to='/menu/hosomaki'>Hosomaki</LinkTo>
        </CardType2>
    
        <CardType3>
          <LinkTo to='/menu/nigiri'>Nigiri</LinkTo>
        </CardType3>
    
        <CardType4>
          <LinkTo to='/menu/uramaki'>Uramaki</LinkTo>
        </CardType4>
    
        <CardType5>
          <LinkTo to='/menu/sashimi '>Sashimi</LinkTo>
        </CardType5>
      </Container>
    </Background>
  );
};

export default Menu;
