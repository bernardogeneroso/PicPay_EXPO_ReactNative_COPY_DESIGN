import React from 'react';

import {Container, Details, Image, Title, Description} from './styles';

import img13 from '../../images/13.png';

export default function Banner(){
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>

        <Description>
          Mantenha as suas parcerias em dia, use o Picpay para fazer as suas conranças.
        </Description>
      </Details>
      <Image source={img13} />
    </Container>
  );
}
