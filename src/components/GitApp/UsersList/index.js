import React, {Component} from 'react';
import {Text, View} from 'react-native';
import User from './User';
class UserList extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <User />
      </View>
    );
  }
}

export default UserList;
