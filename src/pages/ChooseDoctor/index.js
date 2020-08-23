import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, ListDoctor} from '../../components';
import {DummyDoctor6} from '../../assets';
import {colors} from '../../utils';

const ChooseDoctor = () => {
  return (
    <View style={styles.page}>
      <Header type="dark" title="Pilih Dokter Anak" />
      <ListDoctor
        type="next"
        profile={DummyDoctor6}
        name="Alexander Janie"
        desc="Wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor6}
        name="Alexander Janie"
        desc="Wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor6}
        name="Alexander Janie"
        desc="Wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor6}
        name="Alexander Janie"
        desc="Wanita"
      />
      <ListDoctor
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
