import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, List} from '../../components';
import {DummyDoctor6} from '../../assets';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="Pilih Dokter Anak"
        onPress={() => navigation.goBack()}
      />
      <List
        type="next"
        profile={DummyDoctor6}
        name="Alexander Janie"
        desc="Wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        type="next"
        profile={DummyDoctor6}
        name="Alexander Janie"
        desc="Wanita"
      />
      <List
        type="next"
        profile={DummyDoctor6}
        name="Alexander Janie"
        desc="Wanita"
      />
      <List
        type="next"
        profile={DummyDoctor6}
        name="Alexander Janie"
        desc="Wanita"
      />
      <List
        type="next"
        profile={DummyDoctor6}
        name="Alexander Janie"
        desc="Wanita"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
