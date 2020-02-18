import React, {Component} from 'react';
import {View} from 'react-native';
import {Container, Card, Item, Input, Button, Text} from 'native-base';
import styles from './../Style';

class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  handleChange = (e, name) => {
    this.setState({
      [name]: e,
    });
  };

  handleSubmit = () => {
    const {email, password} = this.state;
    if (email !== '' && password !== '') {
      var data = JSON.stringify({
        email: email,
        password: password,
      });
      try {
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.open('POST', 'http://192.168.0.168:4001/user/login');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.setRequestHeader('cache-control', 'no-cache');
        xhr.send(data);
        setTimeout(() => {
          if (xhr.status === 200 && xhr._response) {
            this.handleChange('email', '');
            this.handleChange('password', '');
            let name = JSON.parse(xhr._response).data.name;
            navigate('Welcome', {name});
          } else {
            console.log('Something went wrong, please check server or internet connection')
          }
        }, 500);
      } catch (error) {
				console.log('error')
      }
    } else {
			console.log('Please enter email and password')
    }
  };

  render() {
    return (
      <Container className="login">
        <View style={{flex: 9, justifyContent: 'center'}}>
          <Card style={styles.card}>
            <Item rounded style={styles.cardItem}>
              <Input
                testID="email"
                name="email"
                placeholder="Email"
                onChangeText={e => this.handleChange(e, 'email')}
              />
            </Item>
            <Item rounded style={styles.cardItem}>
              <Input
                testID="password"
                name="password"
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={e => this.handleChange(e, 'password')}
              />
            </Item>
            <Button
              block
              dark
              style={styles.cardItem}
              id="btn"
              className="btn1"
              onPress={() => this.handleSubmit()}>
              <Text>Sign In</Text>
            </Button>
          </Card>
        </View>
      </Container>
    );
  }
}

export default LoginScreen;
