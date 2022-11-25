import {sum} from '@utils/add';
import React, {memo, FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Home: FC = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>1 + 2 = {sum(1, 2)}</Text>
    </View>
  );
};

export default memo(Home);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
});
