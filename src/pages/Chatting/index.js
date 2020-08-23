import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, ChatItem, InputChat} from '../../components';

const Chatting = () => {
  return (
    <View>
      <Header title="Nairobi Putri Hayza" type="dark" />
      <Text>Senin, 21 Maret, 2020</Text>
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({});
