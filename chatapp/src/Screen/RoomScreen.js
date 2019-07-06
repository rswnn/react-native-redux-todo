import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, View } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class RoomScreen extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         token: '',
    //         data: []
    //     }
    // }

    constructor(props) {
      super(props)
      const { navigation } = this.props
      const user = navigation.getParam('user')

      this.state = {
          user: user,
          token: []
      }
  }

    componentWillMount() {
        AsyncStorage.getItem('@token').then(res => this.setState({token: res}))
        .then(() => this.getData())
        .catch(err => alert('Network Error'))
    }

    getData() {
        const { token } = this.state
        axios.get(`${URL.API_URL}/participant`, {
          headers: {
            authorization: `Bearer ${token}`
          }
        }).then(response => {
          if (response.status === 200) {
            this.setState({ data: response.data[0].rooms })
          }
        }).catch(err => alert('Oops !'))
  }

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#075e54', alignItems: 'center'}}>
        <Text style={{fontSize: 20, color: '#fff'}}>Halo Chat</Text>
        </Header>
        <Content>
          <List>
            {this.state.data.map((data) => (
            <TouchableOpacity key={data.id} onPress={() => this.props.navigation.navigate('Chat')}>
              <ListItem>
                <Text>{data.room_name}</Text>
            </ListItem>
            </TouchableOpacity>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}