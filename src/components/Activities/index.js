import React, { Component } from 'react';

import * as firebase from 'firebase';

import { Feather, FontAwesome5 } from '@expo/vector-icons';

import {
  Container,
  Header, 
  Title, 
  ActivitiesRightContainer, 
  ActivitiesModel, 
  BoderBottom, 
  Text, 
  Card, 
  CardHeader, 
  Avatar, 
  Description, 
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles';

import avatar from  '../../images/avatar.png';

export default class Activities extends Component {

  constructor(props) {
    super(props)
    this.state = {
      commnet: 0,
      love: 0,
    }

    //firebase
    var firebaseConfig = {
      apiKey: "AIzaSyBpMlMp_y32yb7ouMNS-EWgwI9uX8HdK_4",
      authDomain: "fir-teste-29bf5.firebaseapp.com",
      databaseURL: "https://fir-teste-29bf5.firebaseio.com",
      projectId: "fir-teste-29bf5",
      storageBucket: "fir-teste-29bf5.appspot.com",
      messagingSenderId: "321848198991",
      appId: "1:321848198991:web:074b34665b9ac01a07e73a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    /*firebase.database().ref('activity/001').set({
      commnet: 1,
      love: 2,
    }).then(() => {
      console.log('INSERT')
    }).catch((error) => {
      console.log(error)
    })*/

    firebase.database().ref('activity/001').on('value', (data) => {
      let values = data.toJSON()
      this.setState({
        commnet: values.commnet,
        love: values.love,
      })
    })

    /////

    this.somarComment = this.somarComment.bind(this)
    this.somarLove = this.somarLove.bind(this)
  }

  somarComment() {
    let soma = this.state.commnet + 1
    firebase.database().ref('activity/001').update({
      commnet: soma
    })
    this.setState({commnet: soma})
  }

  somarLove() {
    let soma = this.state.love + 1
    firebase.database().ref('activity/001').update({
      love: soma
    })
    this.setState({love: soma})
  }

  render() {
    return(
      <Container>
        <Header>
          <Title>Atividades</Title>
          <ActivitiesRightContainer>
              <ActivitiesModel>
                <BoderBottom>
                  <Text>Minhas</Text>
                </BoderBottom> 
              </ActivitiesModel>
              <ActivitiesModel>
                <BoderBottom>
                  <Text>Todas</Text>
                </BoderBottom> 
              </ActivitiesModel>
          </ActivitiesRightContainer>
        </Header>
          <Card>
            <CardHeader>
              <Avatar source={avatar} />
              <Description>
                <Bold>Você</Bold> pagou a <Bold>@camelo123</Bold>
              </Description>
            </CardHeader>

            <CardBody>
              <UserName>Bernardo Generoso</UserName>
            </CardBody>

            <CardFooter>
              <Details>
                <Value>
                    5.00 €
                </Value>

                <Divider></Divider>

                <Feather name="lock" color="#fff" size={16} />
                <Date>há 2 anos</Date>
              </Details>
              
              <Actions>
                <Option onPress={this.somarComment} >
                  <FontAwesome5 name="comment-alt" color="#fff" size={16} />
                  <OptionLabel>{this.state.commnet}</OptionLabel>
                </Option>
                <Option onPress={this.somarLove}>
                  <FontAwesome5 name="heart" color="#fff" size={16} />
                  <OptionLabel>{this.state.love}</OptionLabel>
                </Option>
              </Actions>
            </CardFooter>
          </Card> 
      </Container>
  );
  } 
}
