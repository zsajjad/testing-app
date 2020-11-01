import React from 'react';
import {HomeScreenProps} from './types';
// import Text from 'theme/Text';
import {Text, View} from 'react-native-animatable';
import style from './style';
import Button from 'theme/Button';
import { LOGIN } from 'router/routeNames';

function HomeScreen(props: HomeScreenProps) {
  console.log('here');
  return (
    <View style={style.screen}>
      <View style={style.buttonContainer}>
        
        <Button label={"Login"} type="accent" flex large onPress={() =>{ props.navigation.navigate(LOGIN, {})}} />
        </View>
      <Text>Hello World</Text>
    </View>
  );
}

export default HomeScreen;
